---
id: api-key
title: API Keys
---

import Column from '@site/src/components/Column'


## Overview

Enable secure access to your Qodly application by utilizing **API keys** and **endpoint URLs** for external clients.


### API Endpoint

The API endpoint is a gateway through which developers can programmatically access features or data using standard HTTP methods to execute operations tailored to the needs of their applications. Combined with the [`openDatastore`](../language/commands/openDatastore.md) command or [REST requests](../api/overview.md), it is used specifically to facilitate interactions between external applications and the Qodly application. This could include managing data, triggering actions, or retrieving information from Qodly's apps.

### API Key

An API key is a unique identifier used to authenticate a client or user trying to access the Qodly Cloud application. It helps the API provider control and monitor how the API is being used, typically to prevent misuse or abuse and to manage quotas.

This key is linked to a specific [**role**](../studio/roles/rolesPrivilegesOverview.md), defining the scope of actions that the client can perform based on the permissions associated with that role.

The key must be included in the HTTP header of every REST requests sent as a means of identifying the requester and checking their access permissions. [See below](#using-api-keys) for more information.


## Managing API Keys

To authenticate connections to your Qodly application resource, you'll need to generate API keys and get its endpoint.

### Accessing API Keys

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
      Navigate to the API keys tab in your environment setup. Here, you'll find a table listing all existing keys and their endpoints.
    </Column.Item>
    <Column.Item width="40%">
		<img src={require('./img/api1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<br/>


The API management table displays the API Endpoint specific to your environment and lists any API keys that have been created, though it is initially empty by default.

<img src={require('./img/apiNothing.png').default} style={{borderRadius: '6px'}} />



### Copying API Endpoint

Click the copy button beside the endpoint URL to use it in your application's REST calls.

<img src={require('./img/api3.png').default} style={{borderRadius: '6px'}} />


### Creating a New API Key

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        To configure a new API key, start by clicking on <img src={require('./img/api5.png').default} style={{borderRadius: '6px', width: '20%'}} /> to launch the configuration dialog. Then, follow the detailed property guidelines outlined in the table below to complete your setup.
    </Column.Item>
    <Column.Item width="40%">
		<img src={require('./img/api2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


| Property           | Description                                                                                                            |
|--------------------|------------------------------------------------------------------------------------------------------------------------|
| **Description**    | Enter a brief yet descriptive identifier for the key, which will aid in recognizing its purpose within the application. |
| **API Type** | Choose between two types:<br/><br/>1. **Standard**: This is the regular type, appropriate for most users, where access permissions are managed according to the assigned role.<br/><br/>2. **Administration**: Intended for developers of custom components, offering extended privileges that allow for comprehensive access and management of application data, bypassing standard role-based restrictions. |
| **Role** | Assign a specific role to the API key, dictating its access level within the application. The selection menu includes all [roles defined in the application](../studio/roles/rolesPrivilegesOverview.md), such as Admin, which is set by default. |
| **Expiration Date** | Set the validity period of the API key, with a maximum limit of one year to ensure security protocols are maintained. |
| **Allowed Hosts** | By default, an API key can be used from any client machine. To restrict its usage to specific hosts, use the **Add IP address** button to specify the IP addresses from which the key can accept requests. |

:::tip

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        This API key is initially configured for public access, allowing usage from any host. To specify restrictions to specific hosts, add their IP addresses.
    </Column.Item>
    <Column.Item width="40%">
		<img src={require('./img/api-ip.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::

Once you've entered all the necessary details in the configuration dialog, click `Submit` to generate your API key.


### API Management Table

In the Qodly Cloud Management Console, the API key management panel provides several key functionalities:

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        <ul>
            <li><strong>Show API Key</strong>: This button <img src={require('./img/api-show.png').default} style={{borderRadius: '6px', width: '7%'}} /> reveals the API key in the interface and includes a copy button <img src={require('./img/api-copy.png').default} style={{borderRadius: '6px', width: '6%'}} />, enabling easy duplication of the API key for use in configuring your application or services.</li><br/>
            <li><strong>Delete API Key</strong>: Positioned next to the API key, this button <img src={require('./img/api-delete.png').default} style={{borderRadius: '6px', width: '7%'}} /> removes the key upon confirmation, safeguarding against unintended deletions.</li><br/>
            <li><strong>Edit API Key</strong>: Also adjacent to the API display, the edit button <img src={require('./img/api-edit.png').default} style={{borderRadius: '6px', width: '7%'}} /> opens a configuration dialog for modifying the API key's details.</li><br/>
        </ul>
    </Column.Item>
    <Column.Item width="40%">
		<img src={require('./img/api4.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

## Using API keys

A Qodly API key must be included in the **HTTP header** of every REST requests sent to the server. You can do it in two ways:

- using the [`openDatastore`](../language/commands/openDatastore.md) command to target another Qodly application: you pass both API endpoint and API key through `hotsname` and `api-key` properties in the *connectionInfo* parameter and that's it! Underlying REST requests automatically handle the API keys in HTTP headers.
- using the [REST API](../api/overview): use the API endpoint url and insert the `api-key` header with API key value in every REST requests (for more information, see [this example](../api/overview.md#api-endpoint-usage-example-in-postman)).

## How to manage your API Access (Tutorial video)

See this tutorial video to learn how to:

- Access the API Key from your Qodly app dashboard.
- Authenticate requests with different roles and privileges for secure data access.
- Read product data based on user permissions.
- Create new products using the API.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0NafveAMEHg?si=JfA7PYZnJYZVdwJ7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
