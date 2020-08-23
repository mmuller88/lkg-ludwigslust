import React from "react";

const KontaktEntry = ({heading, text}) =>
  <div>
    <h4 className="f4 b lh-title mb2 primary">{ heading }</h4>
    <p>{ text }</p>
  </div>;

const KontaktEntries = ({data}) => data && data.length > 0
    ? <div className="flex-ns mb3">
      {data.map(({heading, text}) => <KontaktEntry heading={heading} text={text} />)}
    </div>
    : "";

export default class KontaktPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    const entryKontaktEntries = entry.getIn(["data", "kontakt_entries"]);
    const kontaktEntries = entryKontaktEntries ? entryKontaktEntries.toJS() : [];
    return <div className="ph3 bg-off-white">
      <img src={getAsset(entry.getIn(["data", "logo"]))} alt="" className="db w4 center pv4" />
      <div className="center mw6 pv3">
        { widgetFor("body") }
        <KontaktEntries data={kontaktEntries} />
      </div>
    </div>;
  }
}
