import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | number-formatter', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('value', 1234);

    await render(hbs`{{number-formatter value 0}}`);

    assert.equal(this.element.textContent.trim(), '1234');
  });

  test('it shows different values and precisions', async function(assert) {
    await render(hbs`{{number-formatter 10.123456 2}}`);

    assert.equal(this.element.textContent.trim(), '10.12');

    await render(hbs`{{number-formatter 10.123456 0}}`);

    assert.equal(this.element.textContent.trim(), '10');

    await render(hbs`{{number-formatter 10.123456 4}}`);

    assert.equal(this.element.textContent.trim(), '10.1235');
  });
});
