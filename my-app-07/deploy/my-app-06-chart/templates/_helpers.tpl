{{- define "getFullyQualifiedImage"}}
{{- $values:=.values}}
{{- $env:=.env}}
{{- get $values.app.registryUrls $env }}{{ $values.app.name }}:{{ $values.app.version }}
{{- end}}

{{- define "getResourceName"}}
{{- $name:=.name}}
{{- $suffix:=.suffix}}
{{- $name }}-{{ $suffix }}
{{- end}}
