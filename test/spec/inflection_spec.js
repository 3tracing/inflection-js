define(['src/inflection'], function(InflectionJS) {

    describe('InflectionJS', function() {

        var inflection = InflectionJS;

        it('should capitalize a string', function() {
            expect(inflection.capitalize('rails')).toEqual('Rails');
        });

        it('should pluralize a string', function() {
            var p = [],
                r = [],
                s = [
                'person', 'man', 'woman', 'child', 'sex', 'move', 'Person', 'Man', 'Woman', 'Child',
                'Sex', 'Move', 'equipment', 'information', 'rice', 'money', 'species', 'series',
                'fish', 'sheep', 'deer', 'Equipment', 'Information', 'Rice', 'Money', 'Species',
                'Series', 'Fish', 'Sheep', 'Deer', 'octopus', 'wolf', 'potato', 'fool', 'blue',
                'bus', 'student', 'tuna', 'Octopus', 'Wolf', 'Potato', 'Fool', 'Blue', 'Bus',
                'Student', 'Tuna', 'news', 'News', 'mouse', 'Mouse', 'information', 'Information',
                'ox', 'Ox', 'virus', 'Virus', 'archive', 'Archive', 'louse', 'Louse', 'curve', 'Curve'
            ];
            for (var i = 0, len = s.length; i < len; i++) {
                p[i] = inflection.pluralize(s[i]);
                expect(s[i]).toEqual(inflection.singularize(p[i]));
            }
        });

        it('should underscore a string', function() {
            expect(inflection.underscore('ActiveRecord')).toEqual('active_record');
        });

    });
});