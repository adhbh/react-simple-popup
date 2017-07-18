'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var containerStyle = {
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	zIndex: 1000,
	overflow: 'auto',
	display: 'none',
	background: 'rgba(0, 0, 0, .1)'
};

var boxStyle = {
	width: '350px',
	position: 'absolute',
	top: '10%',
	left: '50%',
	marginLeft: '-175px',
	background: '#fff',
	boxShadow: '0px 5px 20px 0px rgba(126,137,140,0.20)',
	borderRadius: '5px',
	border: '1px solid #B8C8CC',
	overflow: 'hidden',
	zIndex: 100
};

var Popup = function Popup(InnerComponent) {
	return function (_React$Component) {
		_inherits(_class, _React$Component);

		function _class(props) {
			_classCallCheck(this, _class);

			var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

			_this.onShow = _this.onShow.bind(_this);
			_this.onHide = _this.onHide.bind(_this);
			_this.hide = _this.hide.bind(_this);
			_this.show = _this.show.bind(_this);

			_this.options = props.options || {};

			_this.className = _this.options.className || 'rs__popup';
			_this.closeOnOutsideClick = !!_this.options.closeOnOutsideClick || true;

			_this.state = {
				isHidden: false
			};
			return _this;
		}

		_createClass(_class, [{
			key: 'onHide',
			value: function onHide() {
				if (typeof this.options.onHide === 'function') {
					this.option.onHide();
				}
			}
		}, {
			key: 'onShow',
			value: function onShow() {
				if (typeof this.options.onShow === 'function') {
					this.option.onShow();
				}
			}
		}, {
			key: 'hide',
			value: function hide() {
				console.log('here');
				this.setState({
					isHidden: true
				});
			}
		}, {
			key: 'show',
			value: function show() {
				this.setState({
					isHidden: false
				});
			}
		}, {
			key: 'render',
			value: function render() {
				this._popup = {
					onShow: this.onShow,
					onHide: this.onHide,
					hide: this.hide,
					show: this.show
				};

				containerStyle.display = this.state.isHidden ? 'none' : 'visible';

				return _react2.default.createElement(
					'div',
					{ style: containerStyle, onClick: this.hide },
					_react2.default.createElement(
						'div',
						{ style: boxStyle, onClick: function onClick(e) {
								e.stopPropagation();
							} },
						_react2.default.createElement(InnerComponent, _extends({}, this.props, { _popup: this._popup }))
					)
				);
			}
		}]);

		return _class;
	}(_react2.default.Component);
};

Popup.propTypes = {
	options: _react.PropTypes.object
};

exports.default = Popup;