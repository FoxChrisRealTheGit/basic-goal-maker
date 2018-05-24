import React from "react";
import { connect } from "react-redux";
import { goalRef } from "../Firebase";
import { setGoals } from "../ducks/actions";
import GoalItem from "./GoalItem";
class GoalList extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }


    componentDidMount() {
        goalRef.on("value", snap => {
            let goals = [];
            snap.forEach(goal => {
                let { email, title } = goal.val();
                const serverKey = goal.key;
                goals.push({ email, title, serverKey })

                this.props.setGoals(goals)
            })
        })
    }
    render(){
        return (
            <div>
                {
                    this.props.goals.map((goal, i) => {
                        console.log(goal)
                        return (
                            <GoalItem key={i} goal={goal} />
                        )
                    })
                }
            </div>
        )
    }
}
function mapStateToProps(state){
    const {goals} = state
    return{
        goals
    }
}
export default connect(mapStateToProps, { setGoals })(GoalList)