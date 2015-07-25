RAILS_ENV=production bundle exec rake assets:precompile



Issues:
	1. Incorrect login redirects to wrong form (doesn't stay on home page where I want it)
	2. Edit Task box size doesn not match what it currently is (it will always resize to the smallest possible size)
	3. Figure out how to get the auto_html.rb initializer to work properly (instead of using css to change image width to 100%)