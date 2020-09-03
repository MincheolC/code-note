import React from "react";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import SnackbarContent from "./SnackbarContent";
import AddAlert from "@material-ui/icons/AddAlert";

function AGridList() {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <h5>Notifications Style</h5>
        <br />
        <SnackbarContent message={"This is a plain notification"} />
        <SnackbarContent
          message={"This is a notification with close button."}
          close
        />
        <SnackbarContent
          message={"This is a notification with close button and icon."}
          close
          icon={AddAlert}
        />
        <SnackbarContent
          message={
            "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
          }
          close
          icon={AddAlert}
        />
      </GridItem>
    </GridContainer>
  );
}

export default AGridList;
