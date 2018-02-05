const { equal, assert } = require('zoroaster/assert')
const context = require('../context')
const testPackage_80 = require('../..')

const testPackage_80TestSuite = {
    context,
    'should be a function'() {
        equal(typeof testPackage_80, 'function')
    },
    'should call package without error'() {
        assert.doesNotThrow(() => {
            testPackage_80()
        })
    },
}

module.exports = testPackage_80TestSuite
