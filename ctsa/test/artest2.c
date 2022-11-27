#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "../header/ctsa.h"

double ar_mean(double *x, int N) {
	double mn;
	int i;

	mn = 0.0;

	for(i = 0; i < N;++i) {
		mn += x[i];
	}

	mn /= (double) N;

	return mn;
}

int main(void) {
	int i, N;
	double *inp;
	int p,q;
	double var, wmean;
	double *phi,*theta;


	FILE *ifp;
	double temp[1200];
	printf("OK");

	ifp = fopen("../data/seriesA.txt", "r");
	i = 0;
	if (!ifp) {
		printf("Cannot Open File");
		exit(100);
	}
	while (!feof(ifp)) {
		fscanf(ifp, "%lf \n", &temp[i]);
		i++;
	}
	N = i;

	inp = (double*)malloc(sizeof(double)* N);
	wmean = ar_mean(temp, N);

	for (i = 0; i < N; ++i) {
		inp[i] = temp[i];
		//printf("%g \n",inp[i]);
	}

	fclose(ifp);
	p = 7;

	phi = (double*)malloc(sizeof(double)* p);

	printf("AR Coefficients Using Yule Walker Algorithm \n");
	yw(inp, N, p, phi, &var);
	printf("\n");
	printf("PHI : ");
	for (i = 0; i < p; ++i) {
		printf("%g ", phi[i]);
	}
	printf("\n");

	printf("VAR %g \n",var);
	printf("\n");

	printf("AR Coefficients Using Burg Algorithm \n");
	burg(inp, N, p, phi, &var);
	printf("\n");
	printf("PHI : ");
	for (i = 0; i < p; ++i) {
		printf("%g ", phi[i]);
	}
	printf("\n");

	printf("VAR %g \n", var);
	free(phi);

	p = 1;
	q = 1;

	phi = (double*)malloc(sizeof(double)* p);
	theta = (double*)malloc(sizeof(double)* q);
	printf("\n");
	printf("ARMA Coefficients Using Hannan Rissanen Algorithm \n");
	hr(inp, N, p, q, phi,theta, &var);
	printf("\n");
	printf("PHI : ");
	for (i = 0; i < p; ++i) {
		printf("%g ", phi[i]);
	}
	printf("\n");

	printf("THETA : ");
	for (i = 0; i < q; ++i) {
		printf("%g ", theta[i]);
	}
	printf("\n");

	printf("VAR %g \n", var);




	free(inp);
	free(phi);
	free(theta);

	return 0;

}
