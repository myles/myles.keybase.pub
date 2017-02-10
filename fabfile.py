"""Fabric File"""
from fabric.api import env, task, local

env.hosts = ['localhost']


@task
def develop():
    """Develop the website."""
    local('yarn start')


@task
def build():
    """Build the website."""
    local('yarn run build')


@task
def deploy():
    """Deploy the website."""
    build()
    local('cp -r ./build/* /keybase/public/myles/')
