# Accessibility

We aim to make our software accessible to the widest audience possible. Empowering all people to easily and successfully use our products requires taking an inclusive, Accessible by Design, approach to both Product Design and Engineering.
    
### Accessibility compliance goals
For all of our web applications, we strive to achieve the Web Content Accessibility Guidelines 2.0 AA level of compliance. This ensures:

* our products exhibit our core company values
* we are using internationally recognized standards for benchmarking accessibility compliance
* we are building our software using industry best practices

### Best practices
Accessibility is for everyone.

* Accessibility is about ensuring equitable access to our applications for all people.
* This includes people with disabilities, and also has many other beneficial aspects such as accommodating a user’s personal preference or temporary limitations, power users, SEO and more.
* We practice Inclusive Design to make our applications accessible to, and easily used by, the widest possible audience, without the need for special adaptation or specialized design.
* We follow web accessibility best practices such as semantic HTML and the proper use of ARIA to ensure robust support for Assistive Technologies.

<div>
  <ul class="do-dont">
    <li class="do">
      <strong>DO:</strong>
      <p>Use the native browser <code>outline</code> on focus</p></li>
    <li class="dont">
      <strong>DON'T:</strong>
      <p>Use the native browser <code>outline</code> on focus</p>
    </li>
  </ul>
  <ul class="do-dont">
    <li class="do">
      <strong>DO:</strong>
      <p>Consider Accessibility practices as a continuous responsibility for all team members</p></li>
    <li class="dont">
      <strong>DON'T:</strong>
      <p>Allow Accessibility features to be an after-thought</p>
    </li>
  </ul>
  <ul class="do-dont">
    <li class="do">
      <strong>DO:</strong>
      <p>Understand expected keyboard navigation before beginning development.</p></li>
    <li class="dont">
      <strong>DON'T:</strong>
      <p>Understand what parts of the feature/product need to be read aloud for Screen Readers and which parts are decorations that need no explanation.</p>
    </li>
  </ul>
</div>
<p>&nbsp;</p>

### Accessible by design
An Accessible by Design approach means we consistently focus on these aspects of Product Design and Development

* Semantic markup with robust support for Assistive Technologies (ATs)
  * Always use HTML5 tags semantically
  * Use ARIA (Accessible Rich Internet Applications) roles and aria- attributes to provide Assistive Technology support, but only when necessary
  * Use components from Seeds to ensure maintainability across the entire application
  * The focus order of elements within a page should be logical and intuitive
  * Any important non-text content should be accompanied by a text alternative (alt-text)
* Simple and intuitive design
  * An intuitive and logical design lends itself well to being developed semantically—consider the “outline” version of a page
  * Experiences should not overwhelm users or behave in unexpected ways
  * The experience should be functional using only a keyboard
* Considerate usage of color
  * Color is never used alone to indicate meaning, such as validation errors or prompting user action
  * Text and User Interface (UI) elements should have sufficient color contrast with their backgrounds
* Clear and concise copy
  * The web app is currently accessible to speakers of English, French, Spanish, Italian and Portuguese. In order to best accommodate these audiences, keep copy short and to the point. Translations are more likely to increase in size (character count) and lose clarity from a verbose English source.
  * Acronyms - must always be defined out upon first-use
* The Guiding Questions
  * Equitable - Is the design is fair and impartial?
  * Flexible - Does the feature allow for multiple input/output methods to accommodate user needs/preferences?
  * Perceivable - Can the information be easily consumed? Either visually, through audio, or through other Assistive Technologies?
  * Understandable - Is the information and experience easy to understand?
  * Low Physical Effort - Is it physically easy to use?

## Keyboard navigation
We aspire to meet the WCAG 2.0 AA standards.

### Expected Keyboard Navigation Interactions

<table class="Table-sc-1q00fdz-0 keyboard-navigation"><thead><tr><th>Interaction</th><th align="left">Keystrokes</th><th align="left">Notes</th></tr></thead><tbody><tr><td>Navigate to most elements</td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li><div class="keybutton">tab</div> - navigate forward</li><li><div class="keybutton">shift</div> + <div class="keybutton">tab</div> - navigate backward</li></ul></td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li>Clear, browser-native focus outlines must be present on focused element</li> <li>Navigation order should be logical and intuitive</li></ul></td></tr><tr><td>Links</td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li><div class="keybutton">enter</div></li></ul></td><td align="left"></td></tr><tr><td>Buttons</td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li><div class="keybutton">enter</div> or <div class="keybutton">space</div></li></ul></td><td align="left">Ensure elements with ARIA <code>role="button"</code> can be activated with both key commands.</td></tr><tr><td>Checkboxes</td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li><div class="keybutton">space</div> - toggles checked / unchecked</li></ul></td><td align="left"></td></tr><tr><td>Radios</td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li><div class="keybutton">tab</div> - to enter/leave the radio group</li><li><div class="keybutton">↑</div> <div class="keybutton">↓</div> - change selection when radios are stacked</li><li><div class="keybutton">←</div> <div class="keybutton">→</div> - change selection when radios are in a row</li></ul></td><td align="left">Radio selection should update automatically on keyup</td></tr><tr><td>Select (Dropdown) Menu</td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li><div class="keybutton">space</div> - to expand a select (sub)menu</li><li><div class="keybutton">↑</div> <div class="keybutton">↓</div> - to traverse menu items</li></ul></td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li>Consider each element in a Select Menu to be a button, thus <div class="keybutton">enter</div> or <div class="keybutton">space</div> will activate that item. </li><li>If the menu item will open up a submenu, focus on the first element in submenu upon opening.</li></ul></td></tr><tr><td>Autocomplete</td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li>Type to begin filtering</li><li><div class="keybutton">↑</div> <div class="keybutton">↓</div> - to traverse options</li><li><div class="keybutton">enter</div> - to select an option</li></ul></td><td align="left">Upon selection of an auto-complete option, focus should go back to the autocomplete text field</td></tr><tr><td>Dialog / Modal / Takeover</td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li><div class="keybutton">esc</div> - to initiate teardown</li></ul></td><td align="left">This will usually just close the modal unless a confirmation/warning modal is required to fully dismiss</td></tr><tr><td>Sliders</td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li><div class="keybutton">↑</div> <div class="keybutton">↓</div> OR </li><li><div class="keybutton">←</div> <div class="keybutton">→</div> - to increase/decrease slider value</li></ul></td><td align="left"></td></tr><tr><td>Range Sliders</td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li><div class="keybutton">tab</div> and <div class="keybutton">shift</div>+<div class="keybutton">tab</div> - focus on either slider handle</li><li>Standard interaction for sliders once focused on a slider handle</li></ul></td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li>On PCs, it is standard for <div class="keybutton">home</div> and <div class="keybutton">end</div> to send a focused slider handle to the lowest/highest value.</li><li><div class="keybutton">page up</div> and <div class="keybutton">page down</div> can also be used to change slider’s values by larger increments (usually 10)</li></ul></td></tr><tr><td>Tab Panel (Tab Group)</td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li><div class="keybutton">tab</div> - to enter and leave the tab panel</li><li><div class="keybutton">↑</div> <div class="keybutton">↓</div> OR </li><li><div class="keybutton">←</div> <div class="keybutton">→</div> - to change tab selection</li></ul></td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li>This is specifically for “application” tabs that do not require a page reload, if the tab group will reload the page, then consider them as a list of Links, where <div class="keybutton">tab</div> and <div class="keybutton">enter</div> are more appropriate interactions</li><li>Tab content should update automatically upon change of the selected tab</li></ul></td></tr><tr><td>Tree</td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li><div class="keybutton">tab</div> - to enter and leave the tab panel</li><li><div class="keybutton">↑</div> <div class="keybutton">↓</div> - navigate previous/next menu options</li><li><div class="keybutton">←</div> <div class="keybutton">→</div> - collapse/expand submenu, move up/down one level</li></ul></td><td align="left"></td></tr><tr><td>Scrolling</td><td align="left"><ul class="Lists__UnorderedList-sc-9ewzzw-0 HhSBY"><li><div class="keybutton">↑</div> <div class="keybutton">↓</div> - vertical scroll</li><li><div class="keybutton">←</div> <div class="keybutton">→</div> - horizontal scroll</li><li><div class="keybutton">space</div> / <div class="keybutton">space</div>+<div class="keybutton">shift</div> - vertical scroll by page.</li></ul></td><td align="left">Always minimize or eliminate horizontal scrolling within our supported viewport sizes.</td></tr></tbody></table>


## Resources
* Our expected keyboard navigation primarily follows the [Keyboard Testing](https://webaim.org/techniques/keyboard/#testing) table from WebAim.
* For a detailed look, check out the [Web Content Accessibility Guidelines 2.0 AA Standards](https://www.w3.org/WAI/WCAG20/quickref/) from W3C.

<p>&nbsp;</p>
