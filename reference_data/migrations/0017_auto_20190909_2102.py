# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2019-09-09 21:02
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reference_data', '0016_dbnsfpgene_gene_names'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='geneexpression',
            unique_together=set([]),
        ),
        migrations.RemoveField(
            model_name='geneexpression',
            name='gene',
        ),
        migrations.DeleteModel(
            name='GeneExpression',
        ),
    ]
