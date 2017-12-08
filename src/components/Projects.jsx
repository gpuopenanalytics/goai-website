import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/projects";

class Projects extends React.Component {
	render() {
		return (
			<article>
				<section styleName="section-container-bg">
					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title"> GOAI Projects </h1>
						</div>
					</div>
					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="subheader">Projects Overview</div>
							<p styleName="pg">
								Currently, GOAI is supporting the GPU DataFrame
								project, which will enable tabular data to be
								directly exchanged between libraries and
								applications via GPU memory. We expect other
								projects to be added in the future, such as a
								graph standard for GPU DataFrames.
							</p>
						</div>

						<div styleName="section-content-right">
							<div styleName="subheader">
								GPU Data Frame (GDF)
							</div>
							<p styleName="pg">
								The basic approach for the GPU Data Frame (GDF)
								is pretty simple: if applications and libraries
								agree on an in-memory data format for tabular
								data and associate metadata, then just a device
								pointer to the data structure need be exchanged.
								Additionally, the IPC mechanism built into the
								CUDA driver allows device pointers to be moved
								between processes.
							</p>
							<p styleName="pg">
								Currently, the GDF format is a subset of the 
								<a href="https://arrow.apache.org/docs/memory_layout.html" styleName="link"> Apache Arrow specification</a>. The precise subset has not been fully
								defined yet, but currently includes numerical
								columns, and will soon include
								dictionary-encoded columns (sometimes called
								"categorical" columns in other data frame
								systems).
							</p>
							<p styleName="pg">
								<a href="https://github.com/gpuopenanalytics/libgdf/wiki/Technical-Overview" styleName="link">
									Learn more at the Github Technical Overview.
								</a>
							</p>
						</div>
					</div>
				</section>
			</article>
		);
	}
}

export default CSSModules(Projects, styles);
