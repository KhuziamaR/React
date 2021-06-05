import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>WARNING</h4>
					Are you Sure You Want to do this?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Sam" time="Today at 6:19pm" content="Nice Blog Post" />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Alex" time="Yesterday at 3:23am" content="I like the pic" />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Jane" time="March 05, 2021 at 9:23pm" content="I love the deisgn" />
			</ApprovalCard>
		</div>
	);
};
ReactDOM.render(<App />, document.querySelector('#root'));
