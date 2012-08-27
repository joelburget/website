module Jekyll

    class JournalIndex < Page
        def initialize(site, base, journal_names)
            @site = site
            @base = base
            @dir = 'journal'
            @name = 'index.html'

            self.content = ''
            self.process(@name)
            self.read_yaml(File.join(base, '_layouts'), 'journal.html')

            self.content = ""
            journal_names.each do |journal_name|
                pretty_journal_name = journal_name.gsub(/_/, ' ')
                self.content += "<p><a href='/journal/#{journal_name}'>#{pretty_journal_name}</a></p>"
            end

            self.data['category'] = 'posts'
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
            #self.data['script'] = <<-eos
            self.content += <<-eos
                <div id="disqus_thread"></div>
                <script type="text/javascript">
                        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
                        var disqus_shortname = 'joelburget'; // required: replace example with your forum shortname

                        /* * * DON'T EDIT BELOW THIS LINE * * */
                        (function() {
                            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                            dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
                            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                        })();
                </script>
                <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
            eos
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
