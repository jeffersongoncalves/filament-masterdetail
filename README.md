# Filament Master Detail

This package is a Filament plugin.

[![Latest Version on Packagist](https://img.shields.io/packagist/v/:vendor_slug/:package_slug.svg?style=flat-square)](https://packagist.org/packages/:vendor_slug/:package_slug)
[![PHP Run Tests](https://github.com/rodrigofs/filament-masterdetail/actions/workflows/run-tests.yml/badge.svg)](https://github.com/rodrigofs/filament-masterdetail/actions/workflows/run-tests.yml)
[![fix-code-style](https://github.com/rodrigofs/filament-masterdetail/actions/workflows/fix-php-code-styling.yml/badge.svg)](https://github.com/rodrigofs/filament-masterdetail/actions/workflows/fix-php-code-styling.yml)
[![phpstan](https://github.com/rodrigofs/filament-masterdetail/actions/workflows/phpstan.yml/badge.svg)](https://github.com/rodrigofs/filament-masterdetail/actions/workflows/phpstan.yml)
[![Total Downloads](https://img.shields.io/packagist/dt/:vendor_slug/:package_slug.svg?style=flat-square)](https://packagist.org/packages/:vendor_slug/:package_slug)

# Filament Master Details

A custom component for the [Filament Admin Panel](https://filamentphp.com), designed to facilitate the addition and removal of related records via a **HasMany (1,n)** relationship, even when the parent record has not yet been persisted in the database.

## Overview

**Filament Master Details** offers a practical and smooth solution for managing related data, especially useful in creation processes where the immediate persistence of the parent record has not occurred.

This component acts as an internal mini-form for child records, allowing them to be added or removed in real-time, storing the data in memory until the parent form is fully persisted.

## Features

- **Add related records** without requiring prior persistence of the main record.
- **Dynamically remove related records**.
- Integration with the Eloquent `hasMany` relationship.
- Real-time storage via Livewire for state management.

> **Important:** The component **does not support pagination nor editing of child records**, and is recommended for relationships with a moderate amount of data.

## Usage Context

Ideal for forms with:
- Quick registrations involving multiple sub-items (e.g., orders with products, classes with students).
- Processes where user experience requires **agility and low friction** during data entry.
- Situations where the parent model has not yet been saved.

## Requirements

- Laravel >= 10.x
- Filament >= 3.x
- Livewire >= 3.x

## Demo

[![dark.png](.github/resources/dark.png)](https://youtu.be/ONHLSC0Znew)

[![light.png](.github/resources/light.png)](https://youtu.be/ONHLSC0Znew)

## WIP...

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Rodrigo Fernandes](https://github.com/rodrigofs)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
