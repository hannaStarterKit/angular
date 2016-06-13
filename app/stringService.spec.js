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

    describe('string method', function () {
        it('should reverse input string', function () {
            // given
            var data = 'input';
            // when
            var outputString = stringService.reverse(data);
            // then
            expect(outputString).toEqual('tupni');
        });
    });
});
