import { Component, OnInit } from '@angular/core';
declare let d3: any;
@Component({
    selector: 'dashboard-cmp',
    templateUrl: 'dashboard.component.html'
})


export class DashboardComponent implements OnInit {
	options;
	data;
	chartType;

	ngOnInit() {

		var format = function(n) {

			var map = {
				1: 'jan',
				2: 'feb',
				3: 'mar',
				4: 'apr',
				5: 'may',
				6: 'june',
				7: 'july',
				8: 'aug',
				9: 'sep',
				10: 'oct',
				11: 'nov',
				12: 'dec'

			};

			return map[n];
		}

		this.options = {
			chart: {
				type: 'lineChart',
				height: 450,
				margin: {
					top: 20,
					right: 20,
					bottom: 40,
					left: 55
				},
				lines: { // for line chart
					forceY: [0, 500],
					//     //forceX: [0]


				},

				showValues: true,
				showLabels: true,
				// labelThreshold:10,
				showControls: true,

				color: ['red', 'darkorange', 'green', 'darkred', 'darkviolet'],
				useInteractiveGuideline: true,
				xAxis: {

					axisLabel: 'Months',
					tickFormat: format


				},
				yAxis: {
					//showMaxMin: true,
					axisLabel: 'No.of Plots Sold',
					ticks: 10,
					axisLabelDistance: -8
				}
			}
		};

		this.data = this.sinAndCos();
	}




	sinAndCos() {		
		//Line chart data should be sent as an array of series objects.
		return [
			{
				"key": "Lohitha Gardens - 1",
				values: [ { x: 1, y: 890 }, { x: 2, y: 38 }, { x: 3, y: 70 }, { x: 4, y: 32 }, { x: 5, y: 0 }, { x: 6, y: 38 }, { x: 7, y: 70 }, { x: 8, y: 32 }, { x: 9, y: 32 }, { x: 10, y: 32 }, { x: 11, y: 32 }, { x: 12, y: 32 }],
				color: "#c05020"
			}, {
				"key": "Lohitha Gardens - 2",
				values: [ { x: 1, y: 200 }, { x: 2, y: 100 }, { x: 3, y: 520 }, { x: 4, y: 133 }, { x: 5, y: 0 }, { x: 6, y: 38 }, { x: 7, y: 70 }, { x: 8, y: 32 }, { x: 9, y: 32 }, { x: 10, y: 32 }, { x: 11, y: 32 }, { x: 12, y: 32 }],
				color: "#30c020"
			}, {
				"key": "Lahari Resorts - 1",
				values: [ { x: 1, y: 390 }, { x: 2, y: 1000 }, { x: 3, y: 200 }, { x: 4, y: 230 }, { x: 5, y: 0 }, { x: 6, y: 38 }, { x: 7, y: 70 }, { x: 8, y: 32 }, { x: 9, y: 32 }, { x: 10, y: 32 }, { x: 11, y: 32 }, { x: 12, y: 32 }],
				color: "#6060c0"
			},
			{
				"key": "Lahari Resorts - 2",
				values: [ { x: 1, y: 22 }, { x: 2, y: 600 }, { x: 3, y: 22 }, { x: 4, y: 23 }, { x: 5, y: 0 }, { x: 6, y: 38 }, { x: 7, y: 4 }, { x: 8, y: 3 }, { x: 9, y: 32 }, { x: 10, y: 32 }, { x: 11, y: 32 }, { x: 12, y: 32 }],
				color: "#6060c0"
			}
		]
		// return data;
	}
}
// export class DashboardComponent implements OnInit {
// 	options;
// 	data;
// 	ngOnInit() {
// 		this.options = {
// 			chart: {
// 				type: 'discreteBarChart',
// 				height: 450,
// 				margin: {
// 					top: 20,
// 					right: 20,
// 					bottom: 50,
// 					left: 55
// 				},
// 				x: function(d) { return d.label; },
// 				y: function(d) { return d.value; },
// 				showValues: true,
// 				valueFormat: function(d) {
// 					return d3.format(',.4f')(d);
// 				},
// 				duration: 500,
// 				xAxis: {
// 					axisLabel: 'X Axis'
// 				},
// 				yAxis: {
// 					axisLabel: 'Y Axis',
// 					axisLabelDistance: -10
// 				}
// 			}
// 		}
// 		this.data = [
// 			{
// 				key: "Cumulative Return",
// 				values: [
// 					{
// 						"label": "A",
// 						"value": -29.765957771107
// 					},
// 					{
// 						"label": "B",
// 						"value": 0
// 					},
// 					{
// 						"label": "C",
// 						"value": 32.807804682612
// 					},
// 					{
// 						"label": "D",
// 						"value": 196.45946739256
// 					},
// 					{
// 						"label": "E",
// 						"value": 0.19434030906893
// 					},
// 					{
// 						"label": "F",
// 						"value": -98.079782601442
// 					},
// 					{
// 						"label": "G",
// 						"value": -13.925743130903
// 					},
// 					{
// 						"label": "H",
// 						"value": -5.1387322875705
// 					}
// 				]
// 			}
// 		];
// 	}

// }
