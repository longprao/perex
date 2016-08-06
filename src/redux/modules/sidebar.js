// Constants

const TOGGLE_SIDEBAR = 'perex/sidebar/TOGGLE';
const TOGGLE_MOBILE_SIDEBAR = 'perex/sidebar/TOGGLE_MOBILE';

// Action Creators

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR,
  };
}

export function toggleMobileSidebar() {
  return {
    type: TOGGLE_MOBILE_SIDEBAR,
  };
}

// Reducer
export const defaultState = {
  toggled: false,
  mobileToggled: false,
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        toggled: !state.toggled,
      };
    case TOGGLE_MOBILE_SIDEBAR:
      return {
        ...state,
        mobileToggled: !state.mobileToggled,
      };
    default:
      return state;
  }
}
