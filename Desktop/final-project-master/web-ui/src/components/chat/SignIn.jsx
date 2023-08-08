// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useState, createRef, useEffect } from "react";
import Avatars from "./Avatars";

const SignIn = ({ handleSignIn }) => {
  const [username, setUsername] = useState("");
  const [moderator, setModerator] = useState(false);
  const [avatar, setAvatar] = useState({});
  const [loaded, setLoaded] = useState(false);
  const inputRef = createRef();
  
  
  

  useEffect(() => {
    setLoaded(true);
    inputRef.current.focus();
  }, [loaded]); // eslint-disable-line

  return (
    <div className="modal pos-absolute top-0 bottom-0">
      <div className="modal__el">
        <h1 className="mg-b-2">[ 단독 사전판매 7%할인 🔥 ] MEGA 워치6 미리보기!  </h1>
        <form onSubmit={(e) => {e.preventDefault()}}>
          <fieldset>
            <label htmlFor="name" className="mg-b-05">
              사용하실 닉네임을 적어주세요.
            </label>
            <input
              name="name"
              id="name"
              ref={inputRef}
              type="text"
              className="radius"
              placeholder="Type here..."
              autoComplete="off"
              value={username}
              onChange={(e) => {
                e.preventDefault();
                setUsername(e.target.value);
              }}
              onCompositionStart={(e) => {
                e.preventDefault();
              }}
            />
            <hr />
            <div className="mg-b-05 label">프로필 사진을 골라주세요.</div>
            <div className="item-select-container pd-1 mg-b-1">
              <div className="avatars pos-relative item-select-grid">
                <Avatars
                  currentAvatar={avatar?.name}
                  handleAvatarClick={(avatar) => {
                    setAvatar(avatar);
                  }}
                />
              </div>
            </div>
            <hr />
            <div className="fl fl-a-center fl-j-start full-width">
              <input
                type="checkbox"
                id="moderator"
                name="moderator"
                className="mg-l-0 mg-r-1"
                checked={moderator}
                onChange={(e) => {
                  setModerator(e.target.checked);
                }}
              />
              <label htmlFor="moderator">관리자 모드로 참여하기.</label>
            </div>
            <hr />
            <button
              onClick={(e) => {
                handleSignIn(username, moderator, avatar);
              }}
              className="btn btn--primary rounded mg-t-1"
              disabled={!username}
            >
              라이브 쇼핑 참여하기
            </button>
          </fieldset>
        </form>
      </div>
      <div className="modal__overlay"></div>
    </div>
  );
};

export default SignIn;
