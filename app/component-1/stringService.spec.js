/**
 * Created by HSIENKIE on 13.06.2016.
 */
describe('string service tests', function () {
    'use strict';

    var stringService;

    beforeEach(module('app.component1'));

    beforeEach(inject(function (StringService) {
        stringService = StringService;
    }));

    describe('string method reverse', function () {
        it('should reverse input string', function () {
            // given
            var input = 'input', output = 'tupni';
            // when
            var outputString = stringService.reverse(input);
            // then
            expect(outputString).toEqual(output);
        });

        it('should throw IilegalArgumentExcaption', function () {
            // given
            var input = 5;
            try {
                // when
                var outputString = stringService.reverse(input);
            } catch(e) {
                console.log(e.message)
                // then
                expect(true).toEqual(true);
            }
        });

    });

    describe('string method append', function () {
        it('should append 2 strings', function () {
            // given
            var input1 = 'in', input2 = 'put', output = 'input';
            // when
            var outputString = stringService.append(input1, input2);
            // then
            expect(outputString).toEqual(output);
        });

        it('should throw IilegalArgumentExcaption', function () {
            // given
            var input1 = 5, input2 = 'string';
            try {
                // when
                var outputString = stringService.append(input1, input2);
            } catch(e) {
                console.log(e.message)
                // then
                expect(true).toEqual(true);
            }
        });

    });

    describe('string method insert', function () {
        it('should insert second string into first strings in the specific index', function () {
            // given
            var input1 = 'in', input2 = 'put', where = 1, output = 'input';
            // when
            var outputString = stringService.insert(input1, where, input2);
            // then
            expect(outputString).toEqual(output);
        });

        it('should throw IilegalArgumentExcaption', function () {
            // given
            var input1 = 5, input2 = 'string', where = 2;
            try {
                // when
                var outputString = stringService.insert(input1, where, input2);
            } catch(e) {
                console.log(e.message)
                // then
                expect(true).toEqual(true);
            }
        });
        it('shouldnt insert second string into first strings in the specific index', function () {
            // given
            var input1 = 'in', input2 = 'put', where = 10, output = 'in';
            // when
            var outputString = stringService.insert(input1, where, input2);
            // then
            expect(outputString).toEqual(output);
        });

        it('shouldnt insert second string into first strings in the specific index', function () {
            // given
            var input1 = 'in2', input2 = 'put', where = 1, output = 'input2';
            // when
            var outputString = stringService.insert(input1, where, input2);
            // then
            expect(outputString).toEqual(output);
        });

        it('shouldnt insert second string into first strings in the specific index', function () {
            // given
            var input1 = 'in', input2 = 'put', where = -1, output = 'in';
            // when
            var outputString = stringService.insert(input1, where, input2);
            // then
            expect(outputString).toEqual(output);
        });

    });

    describe('string method shulffe', function () {
        it('should shulffe 2 strings', function () {
            // given
            var input1 = 'in', input2 = 'put', output = 'ipnu';
            // when
            var outputString = stringService.shuffle(input1, input2);
            // then
            expect(outputString).toEqual(output);
        });

        it('should throw IilegalArgumentExcaption', function () {
            // given
            var input1 = 5, input2 = 'string';
            try {
                // when
                var outputString = stringService.shuffle(input1, input2);
            } catch(e) {
                console.log(e.message)
                // then
                expect(true).toEqual(true);
            }
        });
    });

    describe('string method count', function () {
        it('should count strings', function () {
            // given
            var input = 'ini', what = 'i', output = 2;
            // when
            var outputString = stringService.count(input, what);
            // then
            expect(outputString).toEqual(output);
        });

        it('should count 0 strings', function () {
            // given
            var input = 'ini', what = 'j', output = 0;
            // when
            var outputString = stringService.count(input, what);
            // then
            expect(outputString).toEqual(output);
        });

        it('should throw IilegalArgumentExcaption', function () {
            // given
            var input1 = 55, input2 = 'string';
            var wasExceptionThrown = false;
            try {
                // when
                var outputString = stringService.shuffle(input1, input2);
            } catch(e) {
                console.log(e.message)

                wasExceptionThrown = true;
            }
            // then
            expect(wasExceptionThrown).toEqual(true);
        });
    });

    describe('string method find', function () {
        it('should find letter in input string', function () {
            // given
            var input1 = 'in', what = 'i', output = 0;
            // when
            var outputString = stringService.find(input1, what);
            // then
            expect(outputString).toEqual(output);
        });

        it('should throw IilegalArgumentExcaption', function () {
            // given
            var input = 5, what = 'string';
            try {
                // when
                var outputString = stringService.find(input, what);
            } catch(e) {
                console.log(e.message)
                // then
                expect(e.message).toEqual('Arguments must be strings');
            }
        });

        it('should throw IilegalArgumentExcaption', function () {
            // given
            var input = 'aaa', what = 'string';
            try {
                // when
                var outputString = stringService.find(input, what);
            } catch(e) {
                console.log(e.message)
                // then
                expect(e.message).toEqual('Argument 2 must have 1 char');
            }
        });
    });

});
