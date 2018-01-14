<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\View\Controller;

use Symfony\Component\HttpFoundation\Request;
use TeamELF\Core\Permission;
use TeamELF\Core\Role;
use TeamELF\Event\AppAssetsHaveBeAdded;
use TeamELF\Event\AppAssetsWillBeAdded;
use TeamELF\Http\ViewController;
use TeamELF\View\ViewService;

class AppController extends ViewController
{
    protected $template = 'app.twig';

    function __construct(Request $request, array $parameters)
    {
        parent::__construct($request, $parameters);

        $member = $this->getAuth();
        if (!$member) {
            $this->redirect = '/login?from=' . urlencode($this->request->getUri());
        } else {
            $permissions = [];
            foreach (Permission::where(['role' => $member->getRole()]) as $permission) {
                $permissions[] = $permission->getPermission();
            }
            ViewService::getEngine()
                ->addGlobal('auth', [
                    'id' => $member->getId(),
                    'username' => $member->getUsername(),
                    'role' => [
                        'id' => $member->getRole()->getId(),
                        'name' => $member->getRole()->getName()
                    ],
                    'name' => $member->getName(),
                    'permissions' => $permissions
                ]);
        }
        $roles = [];
        foreach (Role::all() as $role) {
            $roles[] = [
                'id' => $role->getId(),
                'name' => $role->getName(),
                'slug' => $role->getSlug(),
                'color' => $role->getColor(),
                'icon' => $role->getIcon()
            ];
        }
        ViewService::getEngine()
            ->addGlobal('roles', $roles);
    }

    protected function addAssets()
    {
        parent::addAssets();
        app()->dispatch(new AppAssetsWillBeAdded($this->assets));
        $this->assets
            ->addJs(__DIR__ . '/../../../assets/app/dist/app.js')
            ->addCss(__DIR__ . '/../../../assets/app/dist/app.css');
        app()->dispatch(new AppAssetsHaveBeAdded($this->assets));
        $this->assets->entry('teamelf/main');
    }
}
