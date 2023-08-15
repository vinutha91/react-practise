import { useState } from "react";

export const withFastTrackOrder = (BaseUserComponent: any) => (props: any) => {
  const [fastTracker, setFastTracker] = useState(props.isFastTracked);
  const baseElements = (
    <BaseUserComponent customer={props.customer}>
      <br />
      <button
        onClick={() => {
          setFastTracker(!fastTracker);
        }}
      >
        Toggle Tracking
      </button>
      {fastTracker ? (
        <div>Fast Tracked Enabled</div>
      ) : (
        <div>Not Fast Tracked</div>
      )}
    </BaseUserComponent>
  );
  return baseElements;
};
