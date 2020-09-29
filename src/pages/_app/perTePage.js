import React from "react";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Components
import Head from "../../components/head";
import PerTeHero from "../../components/_app/_perTePage/perTeHero";
import PerTeGridSection from "../../components/_app/_perTePage/perTeGridSection";

const PerTePage = ({ user }) => {
  return (
    <>
      <Head title="Per te" />
      <PerTeHero user={user} />
      <PerTeGridSection />
    </>
  );
};

PerTePage.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(PerTePage);
