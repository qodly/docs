---
id: date
title: date
---


<!-- REF #_command_.date.Syntax -->**date** ( *exprString* : string ) : date<br/>**date** ( *exprDate* : date ) : date<!-- END REF -->


<!-- REF #_command_.date.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|exprString|string|&#8594;|String representing the date to be returned|
|exprDate|date|&#8594;|Date expression|
|Result|date|&#8592;|Date expression|<!-- END REF -->

#### Description

The `date` command <!-- REF #_command_.date.Summary -->evaluates *exprString* or *exprDate* and returns a date<!-- END REF -->.

##### *exprString*

The *exprString* must be formatted as follows: "YYYY-MM-DDTHH:MM:SS", for example "2013-11-20T10:20:00". In this case, `date` evaluates the *expression* parameter correctly, regardless of the current settings. Decimal seconds, preceded by a period, are supported (e.g.: "2013-11-20T10:20:00.9854").
If the *exprString* format does not precisely fit this ISO format, the date is evaluated as a short date format based on the regional settings of the server.

:::note

When the *exprString* does not match the ISO format, the regional settings defined in the operating system for a short date are used for the evaluation. For example, in the US version, by default the date must be in the order MM/DD/YY (month, day, year). The month and day can be one or two digits. The year can be two or four digits. If the year is two digits, then `date` considers whether the date belongs to the 21st or 20th century based on the value entered. By default, the pivotal value is 30:

* If the value is greater than or equal to 30, Qodly considers the century to be the 20th and adds 19 to the beginning of the value.
* If the value is less than 30, Qodly considers the century to be the 21st and adds 20 to the beginning of the value.
* If you pass an invalid date (such as "13/35/94" or "aa/12/94") in expression, `date` returns an empty date (00/00/00). It is your responsibility to verify that expression is a valid date.
* If the expression evaluates to undefined, `date` returns an empty date (00/00/00). This is useful when you expect the result to be a date, even if it can be undefined (e.g. an object attribute).

:::

##### *exprDate*

If a date type *exprDate* is passed, `date` returns the date passed in the parameter 'as is'. This is particularly useful in the context of generic programming using object attributes.

#### Example 1

The following examples show various cases:

```qs
 var vdDate, vdDate2, vdDate3, vdDate4, vdDate5 : date
 var vobj : object
 vdDate = date("12/25/94") //returns 12/25/94 on a US system
 vdDate2 = date("40/40/94") //00/00/00
 vdDate3 = date("It was the 6/30, we were in 2016") //06/30/16
 vobj = newObject("expDate","2020-11-17T00:00:00.0000")
 vdDate4 = date(vobj.expDate) //11/17/20

 vdDate5 = date(vobj.creationDate) //00/00/00

```

#### Example 2

`date` evaluation based on a date in ISO format

```qs
 var vDate : date
 var vtDateISO : string
 vtDateISO = "2013-06-05T20:00:00"
 vDate = date(vtDateISO)
  //vDate represents June 5th, 2013 regardless of the system language

```

#### Example 3

You want to get a date from an object attribute, whatever the current attribute date storage option:

```qs
 var vDate : date
 var myObj : object
 if(valueType(myObj.myDate) == Is date) //it's stored as date, no need to convert
    vDate = myObj.myDate
 else //it's stored as string
    vDate = date(myObj.myDate)
 end

```

#### See also

[`bool`](bool.md)<br/>
[`string`](string.md)
