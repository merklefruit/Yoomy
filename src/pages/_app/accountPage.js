import React from "react";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Components
import Head from "../../components/head";
import AccountHero from "../../components/_app/_accountPage/accountHero";

const AccountPage = ({ user }) => {
  return (
    <>
      <Head title="Account" />
      <AccountHero user={user} />
    </>
  );
};

AccountPage.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(AccountPage);
