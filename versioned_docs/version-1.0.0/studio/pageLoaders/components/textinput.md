---
id: textinput
title: Text Input
---
import Column from '@site/src/components/Column'


The **Text Input** component is an interactive UI element that enables user interactions by allowing the input of alphanumeric data within a Page. With support for various input types, this component accommodates diverse data entry scenarios.


:::info 

The **Text Input** component contains an embedded **Input** and a **Label** element. This is of great importance as configuring the **Text Input** component may require adjusting properties within the embedded elements. This applies to the visual style, triggers, and actions as they may differ.

:::

## Use Cases

The Text Input component provides a versatile solution for a wide range of scenarios:

- **User Profile Management**: Users can update their personal information, such as names, contact details, and addresses, ensuring accurate and up-to-date records.

- **Data Filtering**: Users can input search criteria, making it easier to locate specific records within large datasets.

- **Comments and Notes**: Employees can leave comments, feedback, or additional information on records, facilitating efficient communication and collaboration.




## Properties Customization

### Text Input Component

Enhance the **Text Input** component to align with your application's requirements using the following customization options:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
                <li><strong>Label Position</strong>: Developers can tailor the label's position, placing it above, below, to the left, to the right, or even hidden.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
                <img src={require('./img/textInput_LabelPosition.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


### Embedded Label

Within the **Text Input** component, an embedded **Label** allows for further customization of the following properties:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
                <li><strong>Label</strong>: Personalize the label to offer clear instructions or guidance.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
                <img src={require('./img/textInput_label.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### Embedded Input

Within the **Text Input** component, an embedded **Input** allows for further customization of the following properties:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
                <li><strong>Placeholder</strong>: Set a placeholder to provide users with a hint or example of the expected input. This text appears within the input field and disappears as soon as users begin typing.</li> <br/>
                <li><strong>Input Type</strong>: Select the appropriate input type to match the nature of the expected data. Available types include:</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
                <img src={require('./img/textInput_InputCustomization.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<ul>
        <ul>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>text</strong>: Standard alphanumeric data.</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_text.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>text area</strong>: Larger text area for expanding and adjusting size.</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_textArea.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>number</strong>: Numerical values only.</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_number.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>password</strong>: Concealed input for sensitive data.</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_password.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>date</strong>: Limits input to date values with a date picker.</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_date.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>time</strong>: Limits input to time values with a widget for selection, allowing scrolling or clicking to choose values</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_time.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>duration</strong>: Limits input to duration values with a widget, enabling scrolling, manual entry, or using the + and - icons.</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_duration.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
        </ul>
</ul>

<br/>

- **Input Format**: Specify the desired format for the entered data. <br/>
See <a href="componentsBasics#data-formatting">Formats</a> for a description of available formats.

<br/>

- **Read-Only Option**: Toggle the readOnly property to prevent users from editing the input content. This is useful when displaying pre-filled or calculated data that should not be modified. <img src={require('./img/textInput_readonly.png').default} style={{borderRadius: '6px', width: '15%'}} />


## Data Integration

The **Text Input** component allows for seamless integration of Qodly Sources, enabling dynamic data binding and interaction within the Page.

:::info 
The qodlysource for the **Text Input** component should be of type `text`, `number`, `date`, or `duration`.
:::

### Data Binding
To associate data with the Text Input component, follow these steps:

1. **Navigate to the Properties Panel**: Access the Data Access category located within the Properties panel for the Text Input component.

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <ol>
                <li value="2"><strong>Define the Qodly Source</strong>: Specify the appropriate qodlysource that contains the data you want to display within the Text Input or retrieve from user input. This can be an attribute from an entity, an array, or a direct qodlysource of type text. For instance, you can select an entity, such as <code>package</code>.</li>
        </ol>
	</Column.Item>
	<Column.Item width="40%">
                <img src={require('./img/textInput_DataDisplay.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


3. **Choose the Attribute**: Choose the specific attribute that you want to display within the component when using an entity or an array type qodlysource, such as <code>package.name</code>.

:::tip 
Alternatively, you can establish the connection by dragging and dropping the qodlysource onto the Text Input component.
:::

### Server-Side Interaction

Retrieving user input data is equally effortless. By binding a Qodly Source to the **Text Input** component, you can access and employ user-entered content.


<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
                Imagine a search input where users type to find packages. Binding a qodlysource captures the input. 
	</Column.Item>
	<Column.Item width="50%">
                <img src={require('./img/textInput_Server-SideInteraction.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
                Consequently, you can utilize this input value in various ways, such as within a standard action to initiate a search with matching attribute values.
	</Column.Item>
	<Column.Item width="50%">
                <img src={require('./img/textInput_standardAction.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

## Customizing Text Input Styles

The **Text Input** component consists of embedded elements that can be styled individually to enhance appearance and usability. Below are customization details for the **HTML tags** and **HTML attributes** used in this component.

### Component-Specific Tags

The following HTML tags make up the structure of the **Text Input** component. Each tag can be individually styled to adjust its appearance and interaction.

| **Tag Name** | **Applies To**              | **Description**                                                                                                            |
|--------------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------|
| `<label>`    | Container for the text label | This wraps the label text for the input field. Customizing the label with CSS can change its font size, color, and spacing, affecting its visibility and alignment relative to the input. |
| `<span>`     | Label text inside `<label>` | Displays the actual label text. CSS changes to the span can modify text color, style, or opacity, influencing the label’s emphasis and readability.                                   |
| `<input>`    | Field for user text entry   | The primary element where users enter data. Styling the input affects border, background, padding, and focus state, impacting its overall look, spacing, and user interaction feedback. |

### Component-Specific Attributes

HTML attributes within the **Text Input** component provide additional customization options, particularly for guiding user interactions.

| **Attribute Name** | **Applies To** | **Description**                                                                                                 |
|--------------------|----------------|-----------------------------------------------------------------------------------------------------------------|
| `placeholder`      | Input field    | Provides hint text within the input field when it is empty. Styling the placeholder can change its color, font style, and opacity, offering subtle guidance to users on what to enter. |

### Example 1 - Overall Component Style

The `self` selector targets the entire Text Input component, allowing you to customize its size, font, and shadow effects.

<Column.List align="center" justifyContent="between">
  <Column.Item width="58%">
    <pre>
      <code className="language-css">
{`/* Input tag styling*/
self input{
    width: 20.4rem;
    height: 4rem;
    border-radius: 1rem;
    font-size: 1.4rem;
    box-shadow: inset .2rem .2rem .5rem #c8d0e7, inset -.2rem -.2rem .5rem #FFFFFF;
    background: none;
    font-family: inherit;
    color: #9a8ff8;
    border: 0 !important;
}
/* Layout adjustment to display the first child element as a flex container */
self > :first-child{
    display: flex;
}`}
      </code>
    </pre>
  </Column.Item>
 <Column.Item width="40%">
    <img
      src={require('./img/textInput_style1.png').default} style={{ borderRadius: '6px' }}/>
  </Column.Item>
</Column.List>

### Example 2 - Placeholder Style

The `self input::placeholder` selector targets the placeholder text, giving it a distinct color for clarity.

<Column.List align="center" justifyContent="between">
  <Column.Item width="58%">
    <pre>
      <code className="language-css">
{`/* Placeholder text color */
self input::placeholder{ 
    color: #a3a9b5; 
}`}
      </code>
    </pre>
  </Column.Item>
 <Column.Item width="40%">
    <img
      src={require('./img/textInput_style2.png').default} style={{ borderRadius: '6px' }}/>
  </Column.Item>
</Column.List>

### Example 3 - Focus Style

The `self:focus-within` selector applies when the input is focused, such as when a user clicks or types in the field, adding a visual effect to indicate that the field is active.

<Column.List align="center" justifyContent="between">
  <Column.Item width="58%">
    <pre>
      <code className="language-css">
{`/* Focus state styling for the input tag */
self input:focus-within { 
    outline: none; 
    box-shadow: .3rem .3rem .6rem #c8d0e7, -.2rem -.2rem .5rem #FFFFFF;
    color: #6d5dfc;
}`}
      </code>
    </pre>
  </Column.Item>
 <Column.Item width="40%">
    <img
      src={require('./img/textInput_style3.png').default} style={{ borderRadius: '6px' }}/>
  </Column.Item>
</Column.List>

### Example 4 - Label as a Search Icon Inside the Text Input Field

In this example, the Text Input component’s label is positioned on the left and is visible. The `self label::before` selector is used to replace the label with a search icon, and `self:focus-within label::before` changes the icon’s color when the input is focused.

:::tip
Make sure that the label text is empty so that you won’t have an icon next to the text label you put.
:::

<Column.List align="center" justifyContent="between">
  <Column.Item width="58%">
    <pre>
      <code className="language-css longCode-block">
{`/* Main component styling*/
self {
    width: 20.4rem;
    height: 4rem;
    border-radius: 1rem;
    font-size: 1.4rem;
    box-shadow: inset .2rem .2rem .5rem #c8d0e7, inset -.2rem -.2rem .5rem #FFFFFF;
    background: none;
    font-family: inherit;
    padding-left: 1.4rem;
}
/* Input tag styling*/
self input{
    color: #9a8ff8;
    border: 0 !important;
}
/* Layout adjustment to display the first child element as a flex container */
self > :first-child{
    display: flex;
}
/* Placeholder text color */
self input::placeholder{ 
    color: #a3a9b5; 
}
/* Focus state styling for the main component */
self:focus-within { 
    outline: none; 
    box-shadow: .3rem .3rem .6rem #c8d0e7, -.2rem -.2rem .5rem #FFFFFF;
}
/* Focus state styling for input text color */
self input:focus-within { 
    color: #6d5dfc;
}
/* Adds an icon before the label text */
self label::before{
    content: "\f002";
    font: normal normal normal 14px/1 FontAwesome;
    font-size: x-large;
    color: #9baacf;
}
/* Changes the search icon color when the input is in focus */
self:focus-within label::before{ 
    color: #6d5dfc;
}`}
      </code>
    </pre>
  </Column.Item>
 <Column.Item width="40%">
    <img
      src={require('./img/textInput_style4.png').default} style={{ borderRadius: '6px' }}/>
  </Column.Item>
</Column.List>


## Triggers and Events

### Text Input Component

The **Text Input** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|

### Embedded Input

The embedded **Input** can also respond to various events, allowing for dynamic user experiences. Events that can trigger actions within the embedded icon include:

|Event|Description|
|---|---|
|On Change| Calls for an action when the value of the Input changes. This typically occurs when the user enters or modifies text in the Input field. |
|On Click| Calls for an action when the user clicks on the Input. |
|On Keyup| Calls for an action when a keyboard key is released while the Input is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the Input is in focus. |
|On AuxClick| Calls for an action when the user performs an auxiliary action (e.g., right-click or middle-click) on the Input.|
|On Blur| Calls for an action when the Input loses focus (user clicks outside). |
|On Focus| Calls for an action when the Input gains focus (user clicks on it). |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the Input.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the Input.|

### Embedded Label

The embedded **Label** can also respond to various events, allowing for dynamic user experiences. Events that can trigger actions within the embedded icon include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the Label. |
|On Keyup| Calls for an action when a keyboard key is released while the Label is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the Label is in focus. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the Label.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the Label.|