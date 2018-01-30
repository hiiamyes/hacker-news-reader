import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import {
  CellMeasurer,
  CellMeasurerCache
} from "react-virtualized/dist/commonjs/CellMeasurer";
import List from "react-virtualized/dist/commonjs/List";
import Spin from "antd/lib/spin";
import moment from "moment";

import * as appActions from "src/redux/actions/appActions";
import {
  Container,
  LoadMoreLoader,
  Story,
  Index,
  StoryContent,
  Title,
  ByTime
} from "./styles";

const cache = new CellMeasurerCache({
  defaultHeight: 100,
  fixedWidth: true
});

class Content extends Component {
  componentWillMount() {
    const { loadMoreStories } = this.props.appActions;
    loadMoreStories();
  }

  render() {
    const {
      appReducer: {
        isMoreStoriesLoading,
        hasMoreStories,
        stories,
        loadMoreStoriesScrollThresholdHeight
      },
      appActions: { loadMoreStories }
    } = this.props;

    return (
      <Container>
        <AutoSizer>
          {({ height, width }) => (
            <List
              style={{ outline: "none" }}
              width={width}
              height={height}
              deferredMeasurementCache={cache}
              rowHeight={cache.rowHeight}
              rowRenderer={({ index, isScrolling, key, parent, style }) => {
                if (stories[index]) {
                  const { title, by, time, url } = stories[index];
                  return (
                    <CellMeasurer
                      cache={cache}
                      columnIndex={0}
                      key={key}
                      parent={parent}
                      rowIndex={index}
                    >
                      {({ measure }) => (
                        <Story key={key} style={style} type="flex">
                          <Index>{`${index + 1}. `}</Index>
                          <StoryContent>
                            <Title href={url} target="_blank">
                              {title}
                            </Title>
                            <ByTime>{`by ${by} ${moment(
                              time * 1000
                            ).fromNow()}`}</ByTime>
                          </StoryContent>
                        </Story>
                      )}
                    </CellMeasurer>
                  );
                } else {
                  return null;
                }
              }}
              rowCount={stories.length}
              onScroll={({ clientHeight, scrollHeight, scrollTop }) => {
                if (
                  scrollHeight - clientHeight - scrollTop <
                    loadMoreStoriesScrollThresholdHeight &&
                  hasMoreStories &&
                  !isMoreStoriesLoading
                ) {
                  loadMoreStories();
                }
              }}
            />
          )}
        </AutoSizer>
        {isMoreStoriesLoading && (
          <LoadMoreLoader>
            <Spin />
          </LoadMoreLoader>
        )}
      </Container>
    );
  }
}

export default connect(
  ({ appReducer }) => ({ appReducer }),
  dispatch => ({ appActions: bindActionCreators(appActions, dispatch) })
)(Content);
