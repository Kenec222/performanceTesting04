/**
 * Copyright (C) 2019 Unicorn a.s.
 *
 * This program is free software; you can use it under the terms of the UAF Open License v01 or
 * any later version. The text of the license is available in the file LICENSE or at www.unicorn.com.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even
 * the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See LICENSE for more details.
 *
 * You may contact Unicorn a.s. at address: V Kapslovne 2767/2, Praha 3, Czech Republic or
 * at the email: info@unicorn.com.
 */

import React from "react";
import UU5 from "uu5g04";
import "uu5g04-bricks";

const { mount, shallow, wait } = UU5.Test.Tools;

const CONFIG = {
  mixins: [
    "UU5.Common.BaseMixin",
    "UU5.Common.ElementaryMixin",
    "UU5.Common.NestingLevelMixin",
    "UU5.Common.PureRenderMixin"
  ],
  props: {
    src: {
      values: ["http://www.noiseaddicts.com/samples_1w72b820/3724.mp3"]
    },
    autoPlay: {
      values: [true, false]
    },
    loop: {
      values: [true, false]
    },
    preload: {
      values: ["auto", "metadata", "none"]
    },
    muted: {
      values: [true, false]
    },
    authenticate: {
      values: [false, true, null],
      requiredProps: {
        src: "https://plus4u.net/path/trusted.mp3" // to pass "trusted domain" check and therefore add access_token parameter based on the prop
      }
    }
  },
  requiredProps: {
    src: "http://www.noiseaddicts.com/samples_1w72b820/3724.mp3" // to prevent warning about not having src
  },
  opt: {
    shallowOpt: {
      disableLifecycleMethods: false
    }
  }
};

describe(`UU5.Bricks.Audio`, () => {
  UU5.Test.Tools.testProperties(UU5.Bricks.Audio, CONFIG);
});

describe(`UU5.Bricks.Audio docKit examples`, () => {
  it(`UU5.Bricks.Audio should render without crash`, () => {
    const wrapper = shallow(
      <UU5.Bricks.Container id={"uuID01"}>
        <UU5.Bricks.Header id={"uuID02"} level={2} content="autoplay" />
        <UU5.Bricks.Audio id={"uuID03"} src="http://www.noiseaddicts.com/samples_1w72b820/3724.mp3" autoPlay />
        <UU5.Bricks.Header id={"uuID06"} level={2} content="loop" />
        <UU5.Bricks.Audio id={"uuID07"} src="http://www.noiseaddicts.com/samples_1w72b820/3724.mp3" loop />
        <UU5.Bricks.Header id={"uuID010"} level={2} content="preload" />
        <UU5.Bricks.Audio id={"uuID011"} src="http://www.noiseaddicts.com/samples_1w72b820/3724.mp3" preload="none" />
        <UU5.Bricks.Header id={"uuID012"} level={2} content="muted" />
        <UU5.Bricks.Audio id={"uuID013"} src="http://www.noiseaddicts.com/samples_1w72b820/3724.mp3" muted />
      </UU5.Bricks.Container>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
