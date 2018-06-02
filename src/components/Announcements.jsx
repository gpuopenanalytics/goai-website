import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/announcements";

import GoAispeak from "../img/GoAi-group-speak.png";

class Announcements extends React.Component {
	constructor(props) {
		super(props);
		this.trackNav = this.trackNav.bind(this)
		this.trackLink = this.trackLink.bind(this)

	}

	trackNav(title, path) {
	//https://developers.google.com/analytics/devguides/collection/gtagjs/pages
		gtag('config', 'UA-114387697-1', {
		  'page_title' : title,
		  'page_path': path
		});

	}

	trackLink(action, link) {
	//https://developers.google.com/analytics/devguides/collection/gtagjs/events
		gtag('event', action, {
		  'event_category' : 'clicked',
		  'event_label' : link
		});

	}

	/* so nav click always moves to top of page */
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<article styleName="full-content">
				<section styleName="section-container-bg">
					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title"> GoAi to Move <br/> LibGDF Into Arrow</h1>
						</div>
					</div>
					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="date-subheader">06.01.2018</div>

							<div styleName="subheader">Year In Review</div>
							<p>
								Almost a year ago was the formation of GoAi, an initiative with the ambitious mission to enable end-to-end data science on GPUs. Thanks to the diligent work and engagement of our partners: BlazingDB, Graphistry, UC Davis, Anaconda, H2O, and MapD, we have exciting developments to share.
							</p>
							<div styleName="subheader">A Home for LibGDF</div>
							<p>
								Our open spec approach to standardization of the GPU data frame’s data format led the community to adopt Apache Arrow’s technique for libraries and applications to exchange tabular data directly on the GPU. This has allowed developers to take full advantage of the high throughput of GPUs across data science workflows. Currently, the GPU data frame’s functionalities are packaged in LibGDF, a C library. In an interest to consolidate communities and build more bridges to exchange data between GPU libraries, we’ve voted to move the functionality of LibGDF into Arrow.  This will take a little while as we need to adapt the functions of LibGDF to the Arrow code base, but eventually LibGDF will disappear as a separate library. 
							</p>
							<div styleName="subheader">Productivity as the Default</div>
							<p>
								The Python programming language has grown in popularity among data scientists for its flexibility, ease of programming, and readability.  However, Python is not known for performance, so data scientists have had to turn more and more of their attention away from the problems they’re trying to solve and instead towards implementing their hypotheses in less friendly, “more performant” systems. Luckily, work being done by a number of projects (such as TensorFlow, PyTorch, Numba, Chainer/CuPy and many others) allows Python data science workloads to leverage GPUs and get performance similar to GPU-accelerated C++ and Fortran without writing any low-level code.
							</p>
							<p>
								We are continuing our work this year to enable efficient usage of Arrow on GPU from languages like Python, via PyGDF, and for distributed Arrow dataframes, via Dask.  These projects allow users to write <a href="https://github.com/ContinuumIO/gtc2018-numba/blob/master/7%20-%20GPU%20DataFrames.ipynb" onClick={() => {this.trackLink('LinkClickTo', 'https://github.com/ContinuumIO/gtc2018-numba/blob/master/7%20-%20GPU%20DataFrames.ipynb')}} styleName="link" target="_blank">Pandas-like code to manipulate dataframes on the GPU</a>, as well as create user-defined functions that are just-in-time compiled for GPU execution:
							</p>
							<pre styleName="code">
							{`
import pygdf

gdf = pygdf.DataFrame.from_pandas(df)

def to_fahrenheit(temp, temp_f_int):
    for i, t in enumerate(temp):
        temp_f_int[i] = 9/5 * t + 32.0

gdf = gdf.apply_rows(to_fahrenheit,
               incols=['temp'],
               outcols=dict(temp_f_int=np.int32),
               kwargs={})
							`}
							</pre>
							<p>
								GoAi members are also working on support for Arrow on platforms like Node.js as well as developing proposals for representing graph networks in Arrow format.
							</p>
							<p>
								Over the past year, we’ve also observed that there is much we could do to improve interoperability between multidimensional arrays (often called “tensors” by deep learning frameworks) on the GPU.  There are many different tensor implementations available to Python data scientists, and we think it would be a huge win for the community if these different tensors could be exchanged between frameworks in a standard way.  It is the opposite problem for dataframes on the GPU; instead of having no GPU data structures to communicate with, we have too many that don’t interoperate with each other.
							</p>
							<p>
								As a first step, the <a href="http://numba.pydata.org/numba-doc/dev/cuda/cuda_array_interface.html" onClick={() => {this.trackLink('LinkClickTo', 'http://numba.pydata.org/numba-doc/dev/cuda/cuda_array_interface.html')}} styleName="link" target="_blank">Numba team is working to define a standard CUDA array interface for Python</a> that would allow for libraries to seamlessly share GPU arrays without having to copy and convert data.  This would allow for Numba and CuPy to work together for GPU-accelerated UDFs on top of CuPy arrays, as one example.  We already have a proof-of-concept of this working with patched versions of the two projects:
							</p>
							<pre styleName="code">
							{`
import cupy
from numba import cuda

@cuda.jit
def add(x, y, out):
    start = cuda.grid(1)
    stride = cuda.gridsize(1)
    for i in range(start, x.shape[0], stride):
        out[i] = x[i] + y[i]

a = cupy.arange(10)
b = a * 2
out = cupy.empty_like(a)

add[1, 32](a, b, out)
							`}
							</pre>
							<p>
								CuPy and Numba are the first libraries working towards this standardization, but we hope other libraries such as PyCUDA and PyTorch will follow in their footsteps in the near future. The goal of this standard interface is to allow data scientists to leverage the libraries that they need to solve their problems without having to worry about the development burden and performance issues in building the “glue” to move data between different libraries. 
							</p>
							<div styleName="subheader">Go Far, Go Together</div>
							<p>
								GoAi has been a great vehicle for us to consolidate our voices to communicate with the data science community. We want to keep it that way, where it will always be the tip of the spear for end-to-end GPU acceleration. While libgdf is moving back into Apache Arrow, and Numba will continue to live on outside of GoAi, we will continue to work on new challenges that arise in GPU computing collaboratively.  If you want to be a part of our ecosystem, please contribute to the current open source projects that are using GPUs, and suggest new ones we should work on.  Our goal is to build more bridges, and never more walls.
							</p>
						</div>

						<div styleName="section-content-right">
							<p>
								<img src={GoAispeak} styleName="img-full" />
							</p>
						</div>
					</div>
				</section>
			</article>
		);
	}
}

export default CSSModules(Announcements, styles);
