// maubot - A plugin-based Matrix bot system.
// Copyright (C) 2018 Tulir Asokan
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
import React, { Component } from "react"

class Switch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: props.active,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            active: nextProps.active,
        })
    }

    toggle = () => {
        if (this.props.onToggle) {
            this.props.onToggle(!this.state.active)
        } else {
            this.setState({ active: !this.state.active })
        }
    }

    render() {
        return (
            <div className="switch" data-active={this.state.active} onClick={this.toggle}>
                <div className="box">
                    <span className="text">
                        <span className="on">{this.props.onText || "On"}</span>
                        <span className="off">{this.props.offText || "Off"}</span>
                    </span>
                </div>
            </div>
        )
    }
}

export default Switch
