const { expect } = require('chai');
const { replaceKeys } = require('../src/helpers');

describe('Helpers ', () => {

    describe('replaceKeys ', () => {
        it('Should replace all keys if value is defined', () => {

            const obj = {
                foo: {
                    bar: {
                        baz: 'unchanged'
                    },
                },
                quux: {
                    bar: {
                        baz: 'unchanged'
                    }
                }
            }

            replaceKeys(obj, 'baz', 'changed');

            expect(obj.foo.bar.baz).to.equal('changed');
            expect(obj.quux.bar.baz).to.equal('changed');

        });

        it('Should delete all keys if value is undefined', () => {

            const obj = {
                foo: {
                    bar: {
                        baz: 'unchanged'
                    },
                },
                quux: {
                    bar: {
                        test: 'test',
                        baz: 'unchanged'
                    }
                }
            }

            replaceKeys(obj, 'baz');

            expect(obj.foo.bar).to.not.have.property('baz');
            expect(obj.quux.bar).to.not.have.property('baz');
            
        })

    })
})