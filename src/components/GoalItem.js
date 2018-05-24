import React from "react";
import { connect } from "react-redux"
import { completeGoalRef, goalRef } from "../Firebase";

class GoalItem extends React.Component {

    completeGoal() {
        const { email } = this.props.user
        const { title, serverKey } = this.props.goal
        goalRef.child(serverKey).remove()
        completeGoalRef.push({ email, title })
    }


    render() {
        console.log(this.props.user)
        const { email, title } = this.props.goal
        return (
            <div>
                <strong>{title}</strong>
                <span>submitted by <em>{email}</em></span>
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => this.completeGoal()}
                >Complete</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { user } = state;

    return {
        user
    }

}

export default connect(mapStateToProps, null)(GoalItem)