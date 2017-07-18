import React, { PropTypes } from 'react'

const containerStyle = {
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	zIndex: 1000,
	overflow: 'auto',
	display: 'none',
	background: 'rgba(0, 0, 0, .1)'
}

const boxStyle = {
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
}


const Popup = (InnerComponent) => class extends React.Component {
	constructor(props) {
		super(props)
		this.onShow = this.onShow.bind(this)
		this.onHide = this.onHide.bind(this)
		this.hide = this.hide.bind(this)
		this.show = this.show.bind(this)

		this.options = props.options || {}

		this.className = this.options.className || 'rs__popup'
		this.closeOnOutsideClick = !!this.options.closeOnOutsideClick || true

		this.state = {
			isHidden: false,
		}
	}

	onHide () {
		if(typeof this.options.onHide === 'function') {
			this.option.onHide()
		}
	}

	onShow () {
		if(typeof this.options.onShow === 'function') {
			this.option.onShow()
		}
	}

	hide () {
		this.setState({
			isHidden: true
		})
	}

	show () {
		this.setState({
			isHidden: false
		})
	}

	render () {
		this._popup = {
			onShow: this.onShow,
			onHide: this.onHide,
			hide: this.hide,
			show: this.show
		}

		containerStyle.display = this.state.isHidden ? 'none' : 'visible'

		return (
				<div style={containerStyle} onClick={this.hide}>
					<div style={boxStyle} onClick={(e) => { e.stopPropagation() }}>
						<InnerComponent {...this.props} _popup={this._popup} />
					</div>
				</div>
			)
	}
}

Popup.propTypes = {
	options: PropTypes.object
}

export default Popup