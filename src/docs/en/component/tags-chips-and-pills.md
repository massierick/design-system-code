---
path: "/component/tags-chips-and-pills"
subnav: "2/Standard/Standard/9"
lang: "en"
title: "Tags, chips and pills"
---

<helmet>
<title> Tags, Chips and Pills - Aurora Design System </title>
</helmet>

# Tags, Chips and Pills

## Tags

Tags represent a set of user-generated keywords that help label, organize and categorize content. They are useful because they provide metadata that makes content searchable. Tags can be added or removed from content by the author.

Tags are usually displayed near the title of the content, in close proximity to other information such as the date posted, number of likes and author.

Tags are rectangular with a border radius of 4px. The left side of the tag is stylized using a triangle and white circle. Tags use the secondary colours in the chosen palette, and the text colour will be either black or white depending on the tag colour. Refer to the colour section for more information on which text colours to use.

Tags may also include a right-aligned remove button beside the text. This button is represented as a black/white circle with a transparent x.

Tags are sized to match the length of the keywords with padding of 7px on the top, right and bottom, and 10px on the left.

<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">HTML</a>
    <a href="#!" class="badge badge-primary badge-tag">CSS</a>
    <a href="#!" class="badge badge-primary badge-tag">JavaScript</a>
</div>
<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">
    HTML
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    CSS
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    JavaScript
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
</div>

<codeblock html='
    <div class="mt-2">
        <a href="#!" class="badge badge-primary badge-tag">HTML</a>
        <a href="#!" class="badge badge-primary badge-tag">CSS</a>
        <a href="#!" class="badge badge-primary badge-tag">JavaScript</a>
    </div>
    <div class="mt-2">
        <a href="#!" class="badge badge-primary badge-tag">
        HTML
        <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
        </a>
        <a href="#!" class="badge badge-primary badge-tag">
        CSS
        <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
        </a>
        <a href="#!" class="badge badge-primary badge-tag">
        JavaScript
        <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
        </a>
    </div>
' react='' />

## Chips

Chips represent contact information, typically including a user's avatar and name, with a link to their profile.

Chips are rectangular with a border radius of 4px. An avatar image is displayed on the left side of the chip. Chips are sized to match the length of the user's profile name. Chips have padding of 7px on all sides.

Chips have 3 different variations and are displayed as follows:

**Normal:** Rectangular box filled in with <badge style="background-color: #CECECE;color:black;">#CECECE</badge>. Black text. Small avatar \(26 x 26px\) aligned to the left.

<span class="badge badge-primary"><img alt="small avatar" class="avatar avatar-sm" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow"> User 1</span>
<span class="badge badge-primary"><img alt="small avatar" class="avatar avatar-sm" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow"> User 2</span>

<codeblock html='
    <span class="badge badge-primary"><img alt="small avatar" class="avatar avatar-sm" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow"> User 1</span>
    <span class="badge badge-primary"><img alt="small avatar" class="avatar avatar-sm" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow"> User 2</span>
' react='' />


**User-control:** Same as normal, but there is an additional remove icon on the right. This icon is <badge style="background-color: #4D5D6C;">#4D5D6C</badge> with a transparent x, and is right-aligned. Small avatar \(26 x 26px\) aligned to the left.

**Hover:** Same as the user-controlled chip but has a background colour of <badge style="background-color: #4D5D6C;">#4D5D6C</badge> and the remove icon is white with a transparent x. Small avatar \(26 x 26px\) aligned to the left.

## Pills

Pills are similar to chips, but aren't necessarily associated with a particular user. They are styled the same but without the left-aligned avatar.

Pills have three variations which are stylized as follows:

**Normal:** Rectangular box filled in <badge style="background-color: #CECECE; color:black;">#CECECE</badge>. Black text.

<div class="mt-2">
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-secondary">Secondary</span>
</div>

<codeblock html='
    <div class="mt-2">
        <span class="badge badge-primary">Primary</span>
        <span class="badge badge-secondary">Secondary</span>
    </div>
' react='' />

**User-control:** Same as normal, but there is an additional remove icon on the right. This icon is <badge style="background-color: #4D5D6C;">#4D5D6C</badge> with a transparent x, and is right-aligned.

**Hover:** Same as the user-controlled chip but has a background colour of <badge style="background-color: #4D5D6C;">#4D5D6C</badge> and the remove icon is white with a transparent x.
