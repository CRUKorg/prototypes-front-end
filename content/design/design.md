## Design token

Design tokens are the visual design atoms of the design system — specifically, they are named
entities that store visual design attributes. We use them in place of hard-coded values
(such as hex values for color or pixel values for spacing) in order to maintain a scalable and
consistent visual system for UI development.

## Colors

We use a flexible color palette that places emphasis on important elements.

## Primary colors

<div class="doc flex-column">
  <div class="flex layout-30">
    <div class="color-block" style="background-color: #2E008B;">Dark Blue 900</div>
    <div>
      <p>Dark Blue 900 is the core of our brand identity. Use Dark Blue 900 for primary actions and buttons, links, for indicating progress and representing authentication.</p>
      <p class="flex">
        <span><strong>Hex:</strong> #2E008B</span>
        <span><strong>RGB:</strong> 46, 0, 139</span>
      </p>
    </div>
  </div>

  <div class="flex layout-30">
    <div class="color-block" style="background-color: #EC008C;">Magenta 700</div>
    <div>
      <p>Magenta 700 is the core of our brand identity. for in-app text links and to highlight or draw attention to important information that has no interaction. </p>
      <p class="flex">
        <span><strong>Hex:</strong> #EC008C</span>
        <span><strong>RGB:</strong> 236, 0, 140</span>
      </p>
    </div>
  </div>

  <div class="flex layout-30">
    <div class="color-block" style="background-color: #00B6ED">Cyan 300</div>
    <div>
      <p>Cyan 300 is the core of our brand identity. Use Cyan 300 for primary actions and buttons, links, for indicating progress and representing authentication.</p>
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

<div class="doc">
  <div class="flex flex-full">
    <div class="color-palette-block white" style="background-color: #2E008B;">Dark Blue 900</div>
    <div class="color-palettes">
      <div class="color-palette">
        <input type="radio" id="dk-1" name="color-dk" checked/>
        <label for="dk-1" style="background-color: #F5F2F9;">Dark Blue 20</label>
        <div class="color-content color-content-dk-1">
          <p><strong>Dark Blue 20</strong></p>
          <p>
          <span>Hex</span>
          <span>#F5F2F9</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-dark-blue--20</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_DARK_BLUE_20</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-dark-blue--20</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="dk-2" name="color-dk"/>
        <label for="dk-2" style="background-color: #DBCCE7;">Dark Blue 80</label>
        <div class="color-content color-content-dk-2">
          <p><strong>Dark Blue 80</strong></p>
          <p>
          <span>Hex</span>
          <span>#DBCCE7</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-dark-blue--80</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_DARK_BLUE_80</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-dark-blue--80</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="dk-3" name="color-dk"/>
        <label for="dk-3" style="background-color: #B499D0;">Dark Blue 200</label>
        <div class="color-content color-content-dk-3">
          <p><strong>Dark Blue 200</strong></p>
          <p>
          <span>Hex</span>
          <span>#B499D0</span>
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
        <input type="radio" id="dk-4" name="color-dk"/>
        <label for="dk-4" style="background-color: #825DB5;" class="white">Dark Blue 400</label>
        <div class="color-content color-content-dk-4">
          <p><strong>Dark Blue 400</strong></p>
          <p>
          <span>Hex</span>
          <span>#825DB5</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-dark-blue--400</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_DARK_BLUE_400</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-dark-blue--400</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="dk-5" name="color-dk"/>
        <label for="dk-5" style="background-color: #4F269C;" class="white">Dark Blue 700</label>
        <div class="color-content color-content-dk-5">
          <p><strong>Dark Blue 700</strong></p>
          <p>
          <span>Hex</span>
          <span>#4F269C</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-dark-blue--700</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_DARK_BLUE_700</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-dark-blue--700</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="dk-6" name="color-dk"/>
        <label for="dk-6" style="background-color: #2E008B;" class="white">Dark Blue 900</label>
        <div class="color-content color-content-dk-6">
          <p><strong>Dark Blue 900</strong></p>
          <p>
          <span>Hex</span>
          <span>#2E008B</span>
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

<div class="doc">
  <div class="flex flex-full">
    <div class="color-palette-block white" style="background-color: #EC008C;">Magenta 700</div>
    <div class="color-palettes">
      <div class="color-palette">
        <input type="radio" id="mg-1" name="color-mg" checked/>
        <label for="mg-1" style="background-color: #FDE9EA;">Magenta 20</label>
        <div class="color-content color-content-mg-1">
          <p><strong>Magenta 20</strong></p>
          <p>
          <span>Hex</span>
          <span>#FDE9EA</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-magenta--20</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_Magenta_20</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-magenta--20</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="mg-2" name="color-mg"/>
        <label for="mg-2" style="background-color: #F7A0B1;">Magenta 100</label>
        <div class="color-content color-content-mg-2">
          <p><strong>Magenta 100</strong></p>
          <p>
          <span>Hex</span>
          <span>#F7A0B1</span>
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
        <input type="radio" id="mg-3" name="color-mg"/>
        <label for="mg-3" style="background-color: #F1509C;">Magenta 400</label>
        <div class="color-content color-content-mg-3">
          <p><strong>Magenta 400</strong></p>
          <p>
          <span>Hex</span>
          <span>#F1509C</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-magenta--400</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_Magenta_400</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-magenta--400</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="mg-4" name="color-mg"/>
        <label for="mg-4" style="background-color: #EC008C;" class="white">Magenta 700</label>
        <div class="color-content color-content-mg-5">
          <p><strong>Magenta 700</strong></p>
          <p>
          <span>Hex</span>
          <span>#EC008C</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-magenta--700</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_Magenta_700</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-magenta--700</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="mg-5" name="color-mg"/>
        <label for="mg-5" style="background-color: #7D002C;" class="white">Magenta 800</label>
        <div class="color-content color-content-mg-4">
          <p><strong>Magenta 800</strong></p>
          <p>
          <span>Hex</span>
          <span>#7D002C</span>
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
        <label for="mg-6" style="background-color: #300001;" class="white">Magenta 900</label>
        <div class="color-content color-content-mg-6">
          <p><strong>Magenta 900</strong></p>
          <p>
          <span>Hex</span>
          <span>#300001</span>
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

<div class="doc">
  <div class="flex flex-full">
    <div class="color-palette-block white" style="background-color: #00B6ED;">Cyan 300</div>
    <div class="color-palettes">
      <div class="color-palette">
        <input type="radio" id="cy-1" name="color-cy" checked/>
        <label for="cy-1" style="background-color: #CCE3FB;">Cyan 50</label>
        <div class="color-content color-content-cy-1">
          <p><strong>Cyan 50</strong></p>
          <p>
          <span>Hex</span>
          <span>#CCE3FB</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-cyan--50</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_CYAN_50</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-cyan--50</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="cy-2" name="color-cy"/>
        <label for="cy-2" style="background-color: #91C9F7;">Cyan 80</label>
        <div class="color-content color-content-cy-2">
          <p><strong>Cyan 80</strong></p>
          <p>
          <span>Hex</span>
          <span>#91C9F7</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-cyan--80</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_CYAN_80</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-cyan--80</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="cy-3" name="color-cy"/>
        <label for="cy-3" style="background-color: #41B9F1;">Cyan 200</label>
        <div class="color-content color-content-cy-3">
          <p><strong>Cyan 200</strong></p>
          <p>
          <span>Hex</span>
          <span>#41B9F1</span>
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
        <input type="radio" id="cy-4" name="color-cy"/>
        <label for="cy-4" style="background-color: #00B6ED;" class="white">Cyan 300</label>
        <div class="color-content color-content-cy-4">
          <p><strong>Cyan 300</strong></p>
          <p>
          <span>Hex</span>
          <span>#00B6ED</span>
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
        <input type="radio" id="cy-5" name="color-cy"/>
        <label for="cy-5" style="background-color: #00678E;" class="white">Cyan 600</label>
        <div class="color-content color-content-cy-5">
          <p><strong>Cyan 600</strong></p>
          <p>
          <span>Hex</span>
          <span>#00678E</span>
          </p>
          <p>
            <span>Sass</span>
            <span>$Color-cyan--600</span>
          </p>
          <p>
            <span>JavaScript</span>
            <span>COLOR_CYAN_600</span>
          </p>
          <p>
            <span>CSS</span>
            <span>--color-cyan--600</span>
          </p>
        </div>
      </div>
      <div class="color-palette">
        <input type="radio" id="cy-6" name="color-cy"/>
        <label for="cy-6" style="background-color: #002939;" class="white">Cyan 800</label>
        <div class="color-content color-content-cy-6">
          <p><strong>Cyan 800</strong></p>
          <p>
          <span>Hex</span>
          <span>#002939</span>
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

