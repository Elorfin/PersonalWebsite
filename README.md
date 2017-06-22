# Personal website

[![Dependency Status](https://gemnasium.com/badges/github.com/Elorfin/PersonalWebsite.svg)](https://gemnasium.com/github.com/Elorfin/PersonalWebsite)
[![SensioLabsInsight](https://insight.sensiolabs.com/projects/115b9d75-5623-4094-8e6a-b2bcc095fe5d/mini.png)](https://insight.sensiolabs.com/projects/115b9d75-5623-4094-8e6a-b2bcc095fe5d)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/838fd06a52e24fe8a6770cfe0eaf772d)](https://www.codacy.com/app/Elorfin/PersonalWebsite?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Elorfin/PersonalWebsite&amp;utm_campaign=Badge_Grade)

My online curriculum vitae

## Requirements

- PHP >= 7
- composer
- nodeJS
- npm

## Main dependencies

- Symfony 3
- Webpack
- Babel
- SASS
- Lodash
- React
- Redux

## Installation

### Get the source code

```
$ git clone git@github.com:Elorfin/PersonalWebsite.git
```

### Install API

```
$ cp -v app/config/parameters.yml.dist app/config/parameters.yml
$ vi app/config/parameters.yml

$ composer install

$ php bin/console doctrine:database:create
$ php bin/console doctrine:schema:update --dump-sql
$ php bin/console doctrine:schema:update --force
```

### Install client

```
$ npm install
$ npm run build
```
