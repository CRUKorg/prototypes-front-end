# Design token

Design tokens are the visual design atoms of the design system — specifically, they are named
entities that store visual design attributes. We use them in place of hard-coded values
(such as hex values for color or pixel values for spacing) in order to maintain a scalable and
consistent visual system for UI development.

## Colors

### We use a flexible color palette that places emphasis on important elements.

## Primary colors

<div class="markdown flex-column">
  <div class="flex layout-30">
    <div class="color-block" style="background-color: #2E008B;">Dark Blue 500</div>
    <div>
      <p>Dark Blue 500 is the core of our brand identity. Use Dark Blue 900 for primary actions and buttons, links, for indicating progress and representing authentication.</p>
      <p class="flex">
        <span><strong>Hex:</strong> #2E008B</span>
        <span><strong>RGB:</strong> 46, 0, 139</span>
      </p>
    </div>
  </div>

  <div class="flex layout-30">
    <div class="color-block" style="background-color: #EC008C;">Magenta 500</div>
    <div>
      <p>Magenta 500 is the core of our brand identity. for in-app text links and to highlight or draw attention to important information that has no interaction. </p>
      <p class="flex">
        <span><strong>Hex:</strong> #EC008C</span>
        <span><strong>RGB:</strong> 236, 0, 140</span>
      </p>
    </div>
  </div>

  <div class="flex layout-30">
    <div class="color-block" style="background-color: #00B6ED">Cyan 500</div>
    <div>
      <p>Cyan 500 is the core of our brand identity. Use Cyan 300 for primary actions and buttons, links, for indicating progress and representing authentication.</p>
      <p class="flex">
        <span><strong>Hex:</strong> #00B6ED</span>
        <span><strong>RGB:</strong> 0, 182, 237</span>
      </p>
    </div>
  </div>
</div>
<p>&nbsp;</p>

## Color palette

### Dark Blue

<div class="markdown">
  <div class="flex flex-full">
    <div class="color-palette-block white" style="background-color: #2E008B;">Dark Blue 500</div>
    <div class="color-palettes">
      <div class="color-palette">
        <input type="radio" id="dk-1" name="color-dk" checked/>
        <label for="dk-1" style="background-color: #EDEAF5;">Dark Blue 100</label>
        <div class="color-content color-content-dk-1">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Dark Blue 100</strong></p>
          <p>
          <span>Hex</span>
          <span>#EDEAF5</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-dark-blue--100</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_DARK_BLUE_100</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-dark-blue--100</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="dk-2" name="color-dk"/>
        <label for="dk-2" style="background-color: #DAD2EA;">Dark Blue 200</label>
        <div class="color-content color-content-dk-2">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Dark Blue 200</strong></p>
          <p>
          <span>Hex</span>
          <span>#DAD2EA</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-dark-blue--200</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_DARK_BLUE_200</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-dark-blue--200</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="dk-3" name="color-dk"/>
        <label for="dk-3" style="background-color: #A896CF;">Dark Blue 300</label>
        <div class="color-content color-content-dk-3">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Dark Blue 300</strong></p>
          <p>
          <span>Hex</span>
          <span>#A896CF</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-dark-blue--300</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_DARK_BLUE_300</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-dark-blue--300</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="dk-4" name="color-dk"/>
        <label for="dk-4" style="background-color: #2E008B;" class="white">Dark Blue 500</label>
        <div class="color-content color-content-dk-4">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Dark Blue 500</strong></p>
          <p>
          <span>Hex</span>
          <span>#2E008B</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-dark-blue--500</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_DARK_BLUE_500</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-dark-blue--500</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="dk-5" name="color-dk"/>
        <label for="dk-5" style="background-color: #22006C;" class="white">Dark Blue 800</label>
        <div class="color-content color-content-dk-5">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Dark Blue 800</strong></p>
          <p>
          <span>Hex</span>
          <span>#22006C</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-dark-blue--800</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_DARK_BLUE_800</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-dark-blue--800</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="dk-6" name="color-dk"/>
        <label for="dk-6" style="background-color: #13003D;" class="white">Dark Blue 900</label>
        <div class="color-content color-content-dk-6">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Dark Blue 900</strong></p>
          <p>
          <span>Hex</span>
          <span>#13003D</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-dark-blue--900</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_DARK_BLUE_900</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-dark-blue--900</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<p>&nbsp;</p>

### Magenta

<div class="markdown">
  <div class="flex flex-full">
    <div class="color-palette-block white" style="background-color: #EC008C;">Magenta 500</div>
    <div class="color-palettes">
      <div class="color-palette">
        <input type="radio" id="mg-1" name="color-mg" checked/>
        <label for="mg-1" style="background-color: #FDEAF5;">Magenta 100</label>
        <div class="color-content color-content-mg-1">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Magenta 100</strong></p>
          <p>
          <span>Hex</span>
          <span>#FDEAF5</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-magenta--100</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_Magenta_100</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-magenta--100</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="mg-2" name="color-mg"/>
        <label for="mg-2" style="background-color: #FBD3EB;">Magenta 200</label>
        <div class="color-content color-content-mg-2">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Magenta 200</strong></p>
          <p>
          <span>Hex</span>
          <span>#FBD3EB</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-magenta--200</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_Magenta_200</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-magenta--200</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="mg-3" name="color-mg"/>
        <label for="mg-3" style="background-color: #F796D0;">Magenta 300</label>
        <div class="color-content color-content-mg-3">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Magenta 300</strong></p>
          <p>
          <span>Hex</span>
          <span>#F796D0</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-magenta--300</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_Magenta_300</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-magenta--300</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="mg-4" name="color-mg"/>
        <label for="mg-4" style="background-color: #EC008C;" class="white">Magenta 500</label>
        <div class="color-content color-content-mg-5">
          <span class="badges"><span class="red">AA</span><span class="red">AAA</span></span>
          <p><strong>Magenta 500</strong></p>
          <p>
          <span>Hex</span>
          <span>#EC008C</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-magenta--500</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_Magenta_500</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-magenta--500</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="mg-5" name="color-mg"/>
        <label for="mg-5" style="background-color: #BB0071;" class="white">Magenta 800</label>
        <div class="color-content color-content-mg-4">
          <span class="badges"><span>AA</span><span class="red">AAA</span></span>
          <p><strong>Magenta 800</strong></p>
          <p>
          <span>Hex</span>
          <span>#BB0071</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-magenta--800</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_Magenta_800</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-magenta--800</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="mg-6" name="color-mg"/>
        <label for="mg-6" style="background-color: #710044;" class="white">Magenta 900</label>
        <div class="color-content color-content-mg-6">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Magenta 900</strong></p>
          <p>
          <span>Hex</span>
          <span>#710044</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-magenta--900</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_Magenta_900</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-magenta--900</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<p>&nbsp;</p>

### Cyan

<div class="markdown">
  <div class="flex flex-full">
    <div class="color-palette-block white" style="background-color: #00B6ED;">Cyan 500</div>
    <div class="color-palettes">
      <div class="color-palette">
        <input type="radio" id="cy-1" name="color-cy" checked/>
        <label for="cy-1" style="background-color: #E3F7FD;">Cyan 100</label>
        <div class="color-content color-content-cy-1">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Cyan 100</strong></p>
          <p>
          <span>Hex</span>
          <span>#E3F7FD</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-cyan--100</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_CYAN_100</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-cyan--100</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="cy-2" name="color-cy"/>
        <label for="cy-2" style="background-color: #C3EFFA;">Cyan 200</label>
        <div class="color-content color-content-cy-2">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Cyan 200</strong></p>
          <p>
          <span>Hex</span>
          <span>#C3EFFA</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-cyan--200</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_CYAN_200</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-cyan--200</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="cy-3" name="color-cy"/>
        <label for="cy-3" style="background-color: #77DAF5;">Cyan 300</label>
        <div class="color-content color-content-cy-3">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Cyan 300</strong></p>
          <p>
          <span>Hex</span>
          <span>#77DAF5</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-cyan--300</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_CYAN_300</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-cyan--300</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="cy-4" name="color-cy"/>
        <label for="cy-4" style="background-color: #00B6ED;" class="white">Cyan 500</label>
        <div class="color-content color-content-cy-4">
          <span class="badges"><span class="red">AA</span><span class="red">AAA</span></span>
          <p><strong>Cyan 500</strong></p>
          <p>
          <span>Hex</span>
          <span>#00B6ED</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-cyan--500</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_CYAN_500</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-cyan--500</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="cy-5" name="color-cy"/>
        <label for="cy-5" style="background-color: #0093BC;" class="white">Cyan 800</label>
        <div class="color-content color-content-cy-5">
          <span class="badges"><span>AA</span><span class="red">AAA</span></span>
          <p><strong>Cyan 800</strong></p>
          <p>
          <span>Hex</span>
          <span>#0093BC</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-cyan--800</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_CYAN_800</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-cyan--800</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="cy-6" name="color-cy"/>
        <label for="cy-6" style="background-color: #005870;" class="white">Cyan 900</label>
        <div class="color-content color-content-cy-6">
          <span class="badges"><span>AA</span><span>AAA</span></span>
          <p><strong>Cyan 900</strong></p>
          <p>
          <span>Hex</span>
          <span>#005870</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-cyan--800</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_CYAN_800</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-cyan--800</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<p>&nbsp;</p>

## Spacing

#### Our spacing tokens make it easy to add padding, margins, and position coordinates. Start with an 8px grid, so that our spacing options are set in multiples of 8 (ie, 8, 16, 24, 32, etc).

<div class="markdown flex" style="justify-content: flex-start; text-align: center;">
  <div class="flex flex-column">
    <span class="space" style="width: 8px;"></span>
    <span>8px</span>
  </div>
  <div class="flex flex-column">
    <span class="space" style="width: 16px;"></span>
    <span>16px</span>
  </div>
  <div class="flex flex-column">
    <span class="space" style="width: 24px;"></span>
    <span>24px</span>
  </div>
  <div class="flex flex-column">
    <span class="space" style="width: 32px;"></span>
    <span>32px</span>
  </div>
</div>
<p>&nbsp;</p>

## Usage

* Spacing can be applied uniformly or individually to the sides of an element.
* Spacing is flexible based on viewport size. It can scale up or down proportional to the root font size.
<p>&nbsp;</p>

## Responsive Type Scale

When working with different type styles it’s important to adhere to the type scale at all times.
Never introduce a new type size. Below are some standards for the web we’ve defined to help
you get started using the correct sizes for your content.

### Example: resize the screen width to view the change</span>
<div class="type-scale">
  <div class="type-scale-row">
    <span class="type-scale-text">
      <span class="desktop-only">1.912em (31px)</span>
      <span class="mobile-only">1.616em (26px)</span>
    </span>
    <h1>H1. Cras sed cursus lectus.</h1>
  </div>
  <div class="type-scale-row">
    <span class="type-scale-text">
      <span class="desktop-only">1.616em (26px)</span>
      <span class="mobile-only">1.471em (24px)</span>
    </span>
    <h2>H2. Cras sed cursus lectus.</h2>
  </div>
  <div class="type-scale-row">
    <span class="type-scale-text">
      <span class="desktop-only">1.471em (24px)</span>
      <span class="mobile-only">1.3em (21px)</span>
    </span>
    <h3>H3. Cras sed cursus lectus.</h3>
  </div>
  <div class="type-scale-row">
    <span class="type-scale-text">
      <span class="desktop-only">1.3em (21px)</span>
      <span class="mobile-only">1.243em (20px)</span>
    </span>
    <h4>H4. Cras sed cursus lectus.</h4>
  </div>
  <div class="type-scale-row">
    <span class="type-scale-text">
      <span class="desktop-only">1.243em (20px)</span>
      <span class="mobile-only">1.132em (18px)</span>
    </span>
    <h5>H5. Cras sed cursus lectus.</h5>
  </div>
  <div class="type-scale-row">
    <span class="type-scale-text">
      <span>1.132em (18px)</span>
    </span>
    <h6>H6. Cras sed cursus lectus.</h6>
  </div>
</div>
<p>&nbsp;</p>
