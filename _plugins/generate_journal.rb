module Jekyll

    class JournalIndex < Page
        def initialize(site, base, journal_names)
            @site = site
            @base = base
            @dir = 'journal'
            @name = 'index.html'

            self.process(@name)
            self.read_yaml(File.join(base, '_layouts'), 'journal.html')

            self.content = ""
            journal_names.each do |journal_name|
                self.content += "<p><a href='/journal/#{journal_name}'>#{journal_name}</a></p>"
            end

            self.data['category'] = 'posts'

            puts site.categories['posts'].length
            site.categories['posts'] << self
            puts site.categories['posts'].length
        end
    end

    class JournalPage < Page
        def initialize(site, base, dir, journal_name, journal_file)
            @site = site
            @base = base
            @dir = File.join('journal', journal_name)
            @name = 'index.html'

            converter = self.site.converters.find { |c| c.matches(".md") }
            content = File.read("_journal/#{journal_file}")
            content = converter.convert(content)

            self.process(@name)
            self.read_yaml(File.join(base, '_layouts'), 'journal_entry.html')

            self.content = '<div id="journal_entry">' + content + '</div>'
            self.data['header'] = "<link rel='stylesheet' type='text/css' href='/media/css/mou.css' />"
        end
    end

    class JournalGenerator < Generator
        safe true

        def generate(site)
            dir = site.config['journal_dir'] || '_journal'
            journals = []
            Dir.foreach(dir) do |journal_file|
                if /.+\.md/ =~ journal_file
                    journal_name = /(.+)\.md/.match(journal_file)[1]
                    site.pages << JournalPage.new(site, site.source, dir, journal_name, journal_file)
                    journals.push(journal_name)
                end
            end
            site.pages << JournalIndex.new(site, site.source, journals)
        end
    end
end
