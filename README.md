<h1>An elegant transition with jQuery</h1>
<p>Have you ever tried to reduce the width of an element,<br> only to see the contents <br><br>
get narrower <br>
and naro<br>
wer<br><br>
when it's squeezed together?</p>

<p>It wreaks havoc when you want to have some nice transitions, so this plugin solves it elegantly: the content stays visibly the same.</p>

<p>The plugin	copies a box with HTML elements, clones it to the desired number of slices, then animates them to zero width or height, depending on the effect chosen. After animation they are removed.</p>

<p><strong>See it in action:</strong> <a href="http://rayhyde.github.io/elegant_transition/">http://rayhyde.github.io/elegant_transition/</a></p>

<p>For effects you can choose between "blinds", "incremental blinds" and "sweep up". The number of slices are capped at ten to retain some smoothness. You will have to play around with the numbers.</p>
<p>The effects degrade gracefully: without Javascript the boxes are shown below each other.</p>
<p>
<a href="https://github.com/RayHyde/elegant_transition" class="btn btn-lg btn-success w100">Download from Github</a>
</p>

<h2>How to use this plugin</h2>
<h3>1. Link the files you need</h3>
<p>Include the jQuery script at the bottom of your page, e.g. through a CDN:</p>
<p><code>	&lt;script src="//code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;</code></p>
<p>Then include the minimized version of the script:</p>
<p><code>&lt;script src="[path to your script]/jquery.elegant_transition.min.js"&gt;&lt;/script&gt;</code></p>

<p>Change [path to your script] to where it resides, eg "js".</p>
<h3>2. Create your HTML markup</h3>
<p>This is very simple: create an element that contains the boxes that need to be transitioned. Be sure to include the class names <strong>box</strong>, <strong>box1</strong> and <strong>box 2</strong>. Wrap your box content in element with class name <strong>inner</strong>:</p>
<pre>&lt;div id="transition-wrap"&gt;

  &lt;div class="box box1"&gt;
    &lt;div class="inner"&gt;
      [You HTML markup goes here]
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="box box2"&gt;
    &lt;div class="inner"&gt;
      [You HTML markup goes here]
    &lt;/div&gt;
  &lt;/div&gt;

&lt;/div&gt;
</pre>
						
<h3>3. Add the css files to the &lt;head&gt; section of your page</h3>
<p>The file <strong>elegant_transition.css</strong> does not need to be changed (though you can and probably will); the file <strong>theme.css</strong> contains some colours and it may contain the css for what you stick in the boxes. LESS files are provided.</p>
<h3>4. Call the plugin</h3>
<p>Then initialize the plugin, telling it in which element it needs to run:</p>
<pre>
&lt;script&gt;
  $(&lt;containing element here, e.g. "#transition-wrap"&gt;).elegantTransition({
    speed: 500, // sets the transition speed
    effect: 'blinds', // choose between "blinds", "incblinds" or "sweep"
    slices: 5 // sets the number of slices (max 10)
  });
&lt;/script&gt;
	</pre>

<h2>My Playground</h2>

<p>This project is part of my Playground - a collection of fun (and <em>ahem</em>, dare I say it: clever) stuff I made in the past, from jQuery games and plugins to CSS animation tricks.</p>

<p>Please drop in on my portfolio site <a href="http://www.rayhyde.nl">www.rayhyde.nl</a>!</p>