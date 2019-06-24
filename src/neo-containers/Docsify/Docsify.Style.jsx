
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    screenFirebaseUI:{
        margin: theme.spacing(),
    },
    authUI:{
        margin: 'auto',
        maxWidth: 360,
        border: 'none',
        borderRadius: 'none',
        boxShadow: 'none',
        paddingTop: theme.spacing(3),
        textAlign: 'center',
    },
    loggedIn: {
        margin: 'auto',
        maxWidth: 360,
        textAlign: 'center',
    }
});