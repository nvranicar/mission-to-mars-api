'use strict';

const Schema = use('Schema');

class FuelSchema extends Schema {

  up() {
    this.create('fuels', (table) => {
      table.increments();
      table.string('type');
      table.float('burn-rate');
      table.float('weight');
      table.float('volume');
      table.timestamps();
    });
  }

  down() {
    this.drop('fuels');
  }

}

module.exports = FuelSchema;