/**
 * jQuery.ddMetrics
 * @version 1.0 (2018-11-24)
 * 
 * @see {@link README.md}
 * 
 * @copyright 2018 [DivanDesign]{@link http://www.DivanDesign.biz }
 */

(function($){
	$.ddMetrics = {
		//Инициализированы ли счётчики
		isInited: false,
		//Временный массив (пока счётчики не загрузятся, будем запоминать)
		beforeInitStack: [],
		//Данные счётчиков
		countersData: {
			//Данные Google Analytics
			googleAnalytics: {
				isEnabled: false
			},
			//Данные Яндекс.Метрики
			yandexMetrika: {
				isEnabled: false,
				//Ссылка на объект (подменится, как загрузится)
				object: {},
				//Параметры визита, передаваемые в Яндекс.Метрику
				visitParams: {}
			}
		},
		
		/**
		 * @method reachGoal
		 * @version 1.1 (2018-11-24)
		 * 
		 * @desc Достижение цели (все достижения целей следует делать через этот метод)
		 * 
		 * @param name {string} — Имя цели.
		 * @param [params] {objectPlain} — Передаваемые параметры.
		 * @param params[paramName] {string} — Параметр, где ключ — название параметра, значение — значение.
		 * 
		 * @returns {void}
		 */
		reachGoal: function(
			name,
			params
		){
			var _this = this;
			
			name = $.trim(name);
			
			if (name != ''){
				//Если счётчики ещё не инициализирован, просто запомним
				if (!_this.isInited){
					var	goal = {name: name};
					
					if ($.isPlainObject(params)){goal.params = params;}
					
					_this.beforeInitStack.push(goal);
				}else{
					//Яндекс.Метрика
					if (_this.countersData.yandexMetrika.isEnabled){
						//Если есть дополнительные параметры
						if ($.isPlainObject(params)){
							_this.countersData.yandexMetrika.object.reachGoal(
								name,
								params
							);
						}else{
							_this.countersData.yandexMetrika.object.reachGoal(name);
						}
					}
					
					//Google Analytics
					if (_this.countersData.googleAnalytics.isEnabled){
						ga(
							'send',
							'event',
							'general',
							name
						);
					}
				}
			}
		},
		
		/**
		 * @method init
		 * @version 2.0 (2018-11-24)
		 * 
		 * @desc Инициализация счётчиков.
		 * 
		 * @param params {objectPlain} — The parameters.
		 * @param [params.yandexMetrika_counterId] {integer} — ID счётчика Яндекс.Метрики.
		 * @param [params.googleAnalytics_isEnabled=false] {boolean} — Используется ли Google Analytics?
		 * 
		 * @returns {void}
		 */
		init: function(params){
			var _this = this;
			
			//Это внутренний параметр, передавать его не нужно
			params.yandexMetrika_isEnabled = $.isNumeric(params.yandexMetrika_counterId);
			
			if (
				(
					(
						//Если Яндекс.Метрика используется
						params.yandexMetrika_isEnabled &&
						//И существует объект яндекс метрики
						typeof window['yaCounter' + params.yandexMetrika_counterId] != 'undefined'
					) ||
					//Или Яндекс.Метрика не используется
					!params.yandexMetrika_isEnabled
				) &&
				(
					//Если есть вызов гугл аналититики
					(
						params.googleAnalytics_isEnabled &&
						//И можно отправлять цели в гугл аналитику
						typeof ga != 'undefined'
					) ||
					//Или нет вызова гугл аналититики
					!params.googleAnalytics_isEnabled
				)
			){
				_this.isInited = true;
				
				if (params.yandexMetrika_isEnabled){
					_this.countersData.yandexMetrika.isEnabled = params.yandexMetrika_isEnabled;
					
					//Меняем счётчик на настоящий
					_this.countersData.yandexMetrika.object = window['yaCounter' + params.yandexMetrika_counterId];
					
					//Передаём параметры визита (https://yandex.ru/support/metrika/objects/params-method.xml)
					_this.countersData.yandexMetrika.object.params(_this.countersData.yandexMetrika.visitParams);
				}
				
				_this.countersData.googleAnalytics.isEnabled = !!params.googleAnalytics_isEnabled;
				
				//Проходимся по уже вызванным целям и вызываем их по настоящему
				$.each(
					_this.beforeInitStack,
					function(){
						_this.reachGoal(
							this.name,
							this.params
						);
					}
				);
				
				//Очищаем для порядка
				_this.beforeInitStack = [];
			}else{
				//Попробуем ещё раз через полсекунды
				setTimeout(
					function(){
						_this.init(params);
					},
					500
				);
			}
		}
	};
})(jQuery);