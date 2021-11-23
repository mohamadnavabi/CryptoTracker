import { StyleSheet } from 'react-native';
import * as Colors from '@/theme/colors';
import * as Mixins from '@/theme/mixins';
import * as Typography from '@/theme/typography';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        padding: 10
    },
    opacity0: {
        opacity: 0
    },
    opacity1: {
        opacity: 1
    },
    relative: {
        position: 'relative'
    },
    absolute: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    centerItems: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    padding5: {
        padding: 5
    },
    padding10: {
        padding: 10
    },
    padding15: {
        padding: 15
    },
    margin5: {
        margin: 5
    },
    margin10: {
        margin: 10
    },
    margin15: {
        margin: 15
    },
    flex1: {
        flex: 1
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    flexRowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexRowSpaceAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    flexRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexColumnCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexColumnSpaceBetween: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexColumnSpaceAround: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    flexWrap: {
        flex: 1,
        flexWrap: 'wrap',
        flexShrink: 1
    },
    title: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_16,
        flexWrap: 'wrap',
        color: Colors.BLACK
    },
    text: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_13,
        flexWrap: 'wrap',
        color: Colors.FONT
    },
    textinput: (isActive?: boolean = false) => ({
        ...Typography.FONT_REGULAR,
        borderWidth: 1,
        borderColor: isActive ? Colors.SECONDARY : Colors.GRAY,
        borderRadius: 5,
        paddingHorizontal: 10
    }),
    button: {
        backgroundColor: Colors.SECONDARY,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    textAlignCenter: {
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    disabled: {
        opacity: 0.20
    },
    shadow: {
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
    },
});

export default Styles;