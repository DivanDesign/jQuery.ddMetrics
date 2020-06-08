# jQuery.ddMetrics

Библиотека для простой работы со всевозможными счётчиками (Яндекс.Метрика, Google Analytics).


## Requires
* [jQuery](https://jquery.com/) >= 1.11.1


## Documentation


### Usage


#### 1. Подключаем JS на странице

```html
<!-- Необходимые библиотеки -->
<script src="jQuery-1.11.1.min.js"></script>

<!-- jQuery.ddMetrics -->
<script src="jQuery.ddMetrics-1.0.js"></script>
```


#### 2. Инициализируем библиотеку

```js
//Инициализируем метрики
$.ddMetrics.init({
	//TODO: Вставить ID счётчика Яндекс.Метрики или удалить
	yandexMetrika_counterId: 0000,
	//TODO: Если Google Analitycs не используется — удалить
	googleAnalytics_isEnabled: true
});
```


#### 3. Просто вызываем достижения целей

Больше не нужно дожидаться, пока загрузится API счётчиков. Это больше не ваша проблема, библиотека позаботится об этом.

```js
//Достижение цели без параметров
$.ddMetrics.reachGoal('someGoalId');

//Достижение цели с какими-либо параметрами
$.ddMetrics.reachGoal(
	'someGoalId',
	{
		someParamName: 'someParamValue',
		param2: 'value2'
	}
);
```


### Описание параметров


#### `jQuery.ddMetrics.init(params)`

Метод инициализации библиотеки

* `params`
	* Desctription: Параметры.
	* Valid values: `objectPlain`
	* **Required**
	
* `params.yandexMetrika_counterId`
	* Desctription: ID счётчика Яндекс.Метрики. Не указывайте этот параметр, если Яндекс.Метрика не используется на сайте.
	* Valid values: `integer`
	* Default value: —
	
* `params.googleAnalytics_isEnabled`
	* Desctription: Используется ли Google Analytics?
	* Valid values: `integer`
	* Default value: `false`


#### `jQuery.ddMetrics.reachGoal(name, params)`

Метод достижения целей

* `name`
	* Desctription: Название (ID) цели, которое будет отправлено счётчику.
	* Valid values: `string`
	* **Required**
	
* `params`
	* Desctription: Параметры цели, которые будут отправлены счётчику, если нужно.
	* Valid values: `objectPlain`
	* Default value: —
	
* `params.paramName`
	* Desctription: Конкретный параметр, где ключ — название параметра, значение — значение.
	* Valid values: `string`
	* **Required**


## Ссылки

* [Home page](https://code.divandesign.biz/jquery/ddmetrics)
* [Telegram chat](https://t.me/dd_code)


<link rel="stylesheet" type="text/css" href="https://DivanDesign.ru/assets/files/ddMarkdown.css" />