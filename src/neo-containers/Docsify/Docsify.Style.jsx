
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    docsify: {
        position: 'absolute',
        right: 75,
        // border: '1px solid green',
        padding: theme.spacing(),
    },
});