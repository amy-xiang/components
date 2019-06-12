import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" comment="hello there" avatarPic= {faker.image.avatar()}></CommentDetail>
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetail author="Alex" timeAgo="Today at 4:00PM" comment="fam" avatarPic= {faker.image.avatar()} ></CommentDetail>
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" comment="jesuz" avatarPic= {faker.image.avatar()} ></CommentDetail>
        </ApprovalCard>
    </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);