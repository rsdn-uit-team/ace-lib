export const AvatarMixins = (superClass) =>
  class AvatarMixinsClass extends superClass {
    static properties = {
      name: {
        type: String,
      },
      theme: {
        type: String,
      },
      size: {
        type: String,
      },
    };
  };
