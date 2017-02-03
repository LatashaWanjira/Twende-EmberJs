import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('showpassengers-drivers', 'Integration | Component | showpassengers drivers', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{showpassengers-drivers}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#showpassengers-drivers}}
      template block text
    {{/showpassengers-drivers}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
