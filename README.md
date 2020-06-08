# jQuery.ddMetrics

A jQuery library for easy working with Yandex.Metrica and Google Analytics.


## Requires
* [jQuery](https://jquery.com/) >= 1.11.1


## Documentation


### Usage


#### 1. Include JS on page

```html
<!-- Required libs -->
<script src="jQuery-1.11.1.min.js"></script>

<!-- jQuery.ddMetrics -->
<script src="jQuery.ddMetrics-1.0.js"></script>
```


#### 2. Init the library

```js
//Init metrics
$.ddMetrics.init({
	//TODO: Insert Yandex.Metrica counder ID or remove it
	yandexMetrika_counterId: 0000,
	//TODO: If Google Analitycs is not used, remove it
	googleAnalytics_isEnabled: true
});
```


#### 3. Just reach your goals

You don't need to wait while counters API will be loaded. It's no longer your problem, the library will take care about that.

```js
//Goal without params
$.ddMetrics.reachGoal('someGoalId');

//Goal with some params
$.ddMetrics.reachGoal(
	'someGoalId',
	{
		someParamName: 'someParamValue',
		param2: 'value2'
	}
);
```


### Parameters description


#### `jQuery.ddMetrics.init(params)`

The library initialization method.

* `params`
	* Desctription: The parameters.
	* Valid values: `objectPlain`
	* **Required**
	
* `params.yandexMetrika_counterId`
	* Desctription: Yandex.Metrica counder ID. Just avoid it if Yandex.Metrica is not used.
	* Valid values: `integer`
	* Default value: —
	
* `params.googleAnalytics_isEnabled`
	* Desctription: Is Google Analitycs used?
	* Valid values: `integer`
	* Default value: `false`


#### `jQuery.ddMetrics.reachGoal(name, params)`

The method for goals reaching.

* `name`
	* Desctription: Goal name (ID) that will be passed to a analitycs system.
	* Valid values: `string`
	* **Required**
	
* `params`
	* Desctription: Goal parameters that will be passed to a analitycs system if needed.
	* Valid values: `objectPlain`
	* Default value: —
	
* `params.paramName`
	* Desctription: A goal parameter when key — parameter name, value — value.
	* Valid values: `string`
	* **Required**


## Links

* [Home page](https://code.divandesign.biz/jquery/ddmetrics)
* [Telegram chat](https://t.me/dd_code)