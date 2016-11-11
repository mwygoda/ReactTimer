var React = require('react');

var TimerForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    this.props.onSetCountdown();
  },
render: function () {
  return (
    <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
      <div>
        <button className="button expanded">Start</button>
      </div>
    </form>

  );
}
});
module.exports = TimerForm;
